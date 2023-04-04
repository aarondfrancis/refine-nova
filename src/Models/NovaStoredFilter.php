<?php

/*
 * @copyright Hammerstone, LLC.
 * @link      https://hammerstone.dev
 * @author    Aaron Francis (aaron@hammerstone.dev / https://twitter.com/aarondfrancis)
 */

namespace Hammerstone\Refine\Nova\Models;

use Illuminate\Database\Eloquent\Model;

class NovaStoredFilter extends Model
{
    protected $guarded = [];

    protected $casts = [
        'is_public' => 'boolean',
        'state' => 'json'
    ];
}
