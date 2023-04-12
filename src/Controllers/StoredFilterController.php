<?php
/**
 * @author Aaron Francis <aarondfrancis@gmail.com|https://twitter.com/aarondfrancis>
 */

namespace Hammerstone\Refine\Nova\Controllers;

use Hammerstone\Refine\Nova\Models\NovaStoredFilter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StoredFilterController
{
    public function index(Request $request)
    {
        return NovaStoredFilter::query()
            ->where('user_id', Auth::id())
            ->orderBy('name', 'asc')
            ->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'state' => 'required',
        ]);

        return NovaStoredFilter::create([
            'name' => $request->name,
            // @TODO
            'is_public' => 0,
            'state' => $request->state,
            'user_id' => Auth::id(),
        ]);
    }

    public function destroy(NovaStoredFilter $filter, Request $request)
    {
        if ($filter->user_id !== Auth::id()) {
            abort(403);
        }

        $filter->delete();
    }
}
