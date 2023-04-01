<?php

namespace Hammerstone\Refine\Nova;

use Laravel\Nova\Card;
use Laravel\Nova\Resource;

class RefineCard extends Card
{
    /**
     * This is irrelevant for Refine, because we don't actually
     * show a card anywhere, we just teleport our items around.
     *
     * @var string
     */
    public $width = 'full';

    protected $filter;

    public static function forFilter($filter)
    {
        return static::make()->withFilter($filter);
    }

    public static function forAdHocFilter(Resource $resource)
    {
        return static::forFilter(
            AdHocFilter::make()->setResource($resource)
        );
    }

    public function component()
    {
        return 'refine-nova';
    }

    public function getFilter()
    {
        return $this->filter;
    }

    public function withFilter($filter)
    {
        if (is_string($filter)) {
            $filter = app($filter);
        }

        return $this->withMeta([
            'filter' => $this->filter = $filter,
        ]);
    }
}
