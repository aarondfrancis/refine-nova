<?php

use Hammerstone\Refine\Filter;
use Hammerstone\Refine\Stabilizers\UrlEncodedStabilizer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/stabilize', function (Request $request) {
    $filter = Filter::fromState([
        'type' => $request->type,
        'blueprint' => $request->blueprint
    ]);

    $stabilizer = new UrlEncodedStabilizer;

    return [
        'id' => $stabilizer->toStableId($filter)
    ];
});

Route::post('/destabilize', function (Request $request) {
    $filter = (new UrlEncodedStabilizer)->fromStableId($request->id);

    return [
        'blueprint' => $filter->getBlueprint()
    ];
});
