<?php
/**
 * @author Aaron Francis <aarondfrancis@gmail.com|https://twitter.com/aarondfrancis>
 */

namespace Hammerstone\Refine\Nova;

use Hammerstone\Refine\Filter;
use Hammerstone\Refine\Stabilizers\UrlEncodedStabilizer;
use Illuminate\Http\Request;

class StabilizationController
{
    public function stabilize(Request $request)
    {
        $filter = Filter::fromState([
            'type' => $request->type,
            'blueprint' => $request->blueprint,
        ]);

        $stabilizer = new UrlEncodedStabilizer();

        return [
            'id' => $stabilizer->toStableId($filter),
        ];
    }

    public function destabilize(Request $request)
    {
        if (!$request->id) {
            return [
                'blueprint' => [],
            ];
        }

        $filter = (new UrlEncodedStabilizer())->fromStableId($request->id);

        return [
            'blueprint' => $filter->getBlueprint(),
        ];
    }
}
