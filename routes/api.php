<?php

use Hammerstone\Refine\Nova\StabilizationController;
use Illuminate\Support\Facades\Route;

Route::post('/stabilize', [StabilizationController::class, 'stabilize']);
Route::post('/destabilize', [StabilizationController::class, 'destabilize']);
