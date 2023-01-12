<?php

namespace Hammerstone\Refine\Nova;

use Laravel\Nova\Card;

class RefineCard extends Card
{
    /**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = 'full';

    public static function forFilter($filter)
    {
        return static::make()->withFilter($filter);
    }

    public function withFilter($filter)
    {
        if (is_string($filter)) {
            $filter = app($filter);
        }

        return $this->withMeta([
            'filter' => $filter,
        ]);
    }

    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'refine-nova';
    }
}
