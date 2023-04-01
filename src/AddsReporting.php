<?php
/**
 * @author Aaron Francis <aarondfrancis@gmail.com|https://twitter.com/aarondfrancis>
 */

namespace Hammerstone\Refine\Nova;

use Hammerstone\Refine\Filter;
use Hammerstone\Refine\Stabilizers\UrlEncodedStabilizer;
use Laravel\Nova\Fields\Field;
use Laravel\Nova\Http\Requests\NovaRequest;

trait AddsReporting
{
    /**
     * @return mixed
     */
    public function indexFields(NovaRequest $request)
    {
        // We let the parent class do its thing in terms of resolving and handling
        // permissions, and then we filter down to just the requested fields
        // based on a macro that's bound in the CardServiceProvider.
        return parent::indexFields($request)->onlyRequested($request);
    }

    /**
     * @return mixed
     *
     * @throws \Exception
     */
    public static function indexQuery(NovaRequest $request, $query)
    {
        // I suppose it IS possible to have no filter here. If they've added
        // the trait, not added a card, and not added a `conditions`
        // method then there would be no card.
        if ($filter = static::findFilter($request)) {
            // Typically we would start with the `initialQuery` from the filter,
            // but we can't do that in a Nova context, so we give Refine
            // the query as-is and let it bind in the user's intent.
            $filter->useInitialQuery($query)->bind();
        }

        return $query;
    }

    protected static function findFilter(NovaRequest $request)
    {
        if ($id = $request->input(static::uriKey() . '_refine')) {
            return (new UrlEncodedStabilizer)->fromStableId($id);
        }

        $card = (new static)->resolveCards($request)->first(function ($card) {
            return $card instanceof RefineCard;
        });

        if ($card) {
            return $card->getFilter();
        }
    }

    /**
     * This extends the parent method to add a RefineCard to the
     * cards if one isn't already present but should be.
     *
     * @return \Illuminate\Support\Collection<int, \Laravel\Nova\Metrics\Metric|\Laravel\Nova\Card>
     *
     * @see \Laravel\Nova\Resource::resolveCards()
     */
    public function resolveCards(NovaRequest $request)
    {
        $cards = parent::resolveCards($request);

        // If they are using an AdHoc filter, we need to add a RefineCard to the cards.
        if ($this->isUsingAdHocFilter($request)) {
            $cards->push(RefineCard::forAdHocFilter($this));
        }

        return $cards->each(function ($card) use ($request) {
            // Regardless of how the card is created, we want
            // to append the fields to meta on the way out.
            if ($card instanceof RefineCard) {
                $card->withMeta([
                    'fields' => $this->unrefinedIndexFields($request)
                ]);
            }
        });
    }

    /**
     * @return array
     */
    public function unrefinedIndexFields(NovaRequest $request)
    {
        return parent::indexFields($request)->map(function (Field $field) {
            return [
                'value' => $field->attribute,
                'label' => $field->name,
                'checked' => false,
            ];
        })->toArray();
    }

    /**
     * @return bool
     */
    protected function isUsingAdHocFilter(NovaRequest $request)
    {
        $cardManuallyDefined = collect($this->cards($request))->filter(function ($card) {
            return $card instanceof RefineCard;
        })->isNotEmpty();

        return !$cardManuallyDefined && method_exists($this, 'conditions');
    }
}
