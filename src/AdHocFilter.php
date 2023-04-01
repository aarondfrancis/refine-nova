<?php
/**
 * @author Aaron Francis <aarondfrancis@gmail.com|https://twitter.com/aarondfrancis>
 */

namespace Hammerstone\Refine\Nova;

use App\Nova\Resource;
use Hammerstone\Refine\Concerns\FilterCallbacks;
use Hammerstone\Refine\Filter;
use Illuminate\Support\Arr;

class AdHocFilter extends Filter
{
    /**
     * @var array
     */
    protected $conditions = [];

    /**
     * @var string
     */
    protected $resource;

    protected function boot()
    {
        // We have to re-populate conditions after the filter is created from state.
        $this->addCallback(
            FilterCallbacks::AFTER_CREATED_FROM_STATE,
            [$this, 'afterCreatedFromState']
        );
    }

    /**
     * @return array
     */
    public function conditions()
    {
        return $this->conditions;
    }

    /**
     * @return array
     */
    protected function additionalState()
    {
        // This is a FQCN of the Nova resource. We need it to be passed
        // around because we can't get the conditions otherwise.
        return [
            'resource' => $this->resource,
        ];
    }

    /**
     * @param $resource
     * @return $this
     */
    public function setResource($resource)
    {
        if ($resource instanceof Resource) {
            $resource = get_class($resource);
        }

        $this->resource = $resource;
        $this->conditions = (new $resource)->conditions();

        return $this;
    }

    protected function afterCreatedFromState($state)
    {
        $this->setResource(Arr::get($state, 'resource'));
    }
}