<?php
/**
 * @author Aaron Francis <aarondfrancis@gmail.com|https://twitter.com/aarondfrancis>
 */

namespace Hammerstone\Refine\Nova;

use Hammerstone\Refine\Blueprints\Blueprint;
use Hammerstone\Refine\Filter;
use Hammerstone\Refine\Stabilizers\UrlEncodedStabilizer;
use Laravel\Nova\Http\Requests\NovaRequest;

trait RefinesModels
{
    /**
     * @param  NovaRequest  $request
     * @return string|Filter
     */
    public static function refineFilter(NovaRequest $request = null)
    {
        $filter = static::$filter;

        if (is_string($filter)) {
            $filter = app($filter, [
                'blueprint' => static::getBlueprint($request)
            ]);
        }

        return $filter;
    }

    /**
     * @param  NovaRequest  $request
     * @return RefineCard
     */
    public static function refineCard(NovaRequest $request = null)
    {
        return RefineCard::forFilter(static::refineFilter($request));
    }

    /**
     * @param  NovaRequest  $request
     * @param $query
     * @return mixed
     */
    public static function indexQuery(NovaRequest $request, $query)
    {
        return static::refine($request, $query);
    }

    /**
     * @return array|Blueprint
     */
    public static function defaultBlueprint()
    {
        return [];
    }

    /**
     * @param  NovaRequest  $request
     * @param $query
     * @return mixed
     */
    public static function refine(NovaRequest $request, $query)
    {
        $filter = static::refineFilter($request);

        if (is_string($filter)) {
            $filter = app($filter, [
                'blueprint' => static::getBlueprint($request),
            ]);
        }

        // Typically we would start with the `initialQuery` from the filter,
        // but we can't do that in a Nova context, so we give Refine
        // the query as-is and let it bind in the user's intent.
        $filter->useInitialQuery($query)->bind();

        return $query;
    }

    /**
     * @param  NovaRequest|null  $request
     * @return array
     */
    protected static function getBlueprint(NovaRequest $request = null)
    {
        // The NovaRequest isn't passed to the `cards` method so it might be null.
        // We just need the query params so we use the global request helper.
        if ($id = request()->input(static::uriKey() . '_refine')) {
            return (new UrlEncodedStabilizer)->fromStableId($id)->getBlueprint();
        }

        return static::defaultBlueprint();
    }
}
