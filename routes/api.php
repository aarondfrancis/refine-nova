<?php

use Hammerstone\Refine\Nova\Controllers\StabilizationController;
use Hammerstone\Refine\Nova\Controllers\StoredFilterController;
use Illuminate\Support\Facades\Route;

Route::post('/stabilize', [StabilizationController::class, 'stabilize']);
Route::post('/destabilize', [StabilizationController::class, 'destabilize']);

Route::post('/stored', [StoredFilterController::class, 'store']);
