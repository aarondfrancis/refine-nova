<?php
/**
 * @author Aaron Francis <aarondfrancis@gmail.com|https://twitter.com/aarondfrancis>
 */

namespace Hammerstone\Refine\Nova;

use Hammerstone\Refine\Filter;
use Hammerstone\Refine\Stabilizers\UrlEncodedStabilizer;
use Illuminate\Http\Request;
use Laravel\Nova\Http\Requests\NovaRequest;

trait RefinesModels
{
    /**
     * @param NovaRequest $request
     * @return string|Filter
     */
    abstract public static function refineFilter(NovaRequest $request);

    /**
     * @param NovaRequest $request
     * @param $query
     * @return mixed
     */
    public static function refine(NovaRequest $request, $query)
    {
        $filter = static::refineFilter($request);

        if (is_string($filter)) {
            $filter = app($filter);
        }

        if ($id = $request->input(static::uriKey() . '_refine')) {
            $filter = (new UrlEncodedStabilizer)->fromStableId($id);
        }

        // Typically we would start with the `initialQuery` from the filter,
        // but we can't do that in a Nova context, so we give Refine
        // the query as-is and let it bind in the user's intent.
        $filter->useInitialQuery($query)->bind();

        return $query;
    }

}
