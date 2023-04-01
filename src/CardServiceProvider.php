<?php

namespace Hammerstone\Refine\Nova;

use Hammerstone\Refine\Conditions\Clause;
use Hammerstone\Refine\Frontend\Vue2Frontend;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Fields\Field;
use Laravel\Nova\Fields\FieldCollection;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Nova;

class CardServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->booted(function () {
            $this->routes();
        });

        if (class_exists('\Hammerstone\Refine\Conditions\Clause')) {
            if (is_null(Clause::$resolveComponentUsing)) {
                Clause::$resolveComponentUsing = Vue2Frontend::class;
            }
        }

        // We base our CSS file on what version of Nova we're using.
        $version = head(explode(' ', Nova::version()));

        $css = Cache::rememberForever('refine-nova-css-' . $version, function () use ($version) {
            $path = __DIR__ . "/../dist/css/v$version.css";

            if (!realpath($path)) {
                // Guarantee that we have a CSS file to use.
                $path = __DIR__ . '/../dist/css/v4.22.2.css';
            }

            return $path;
        });

        Nova::serving(function (ServingNova $event) use ($css) {
            Nova::script('refine-nova-card', __DIR__ . '/../dist/js/card.js');
            Nova::style('refine-nova', $css);
        });


        // In Nova you could define two fields with the same attribute AND with the same name,
        // which means there's no way for us to directly address a field without doing some
        // weird stuff. We'll start by referencing via attribute, since that doesn't change
        // very often. If we *do* come across a duplicate attribute, we'll append an
        // `:N` to the attribute name. About as good as we can do, unfortunately.
        FieldCollection::macro('disambiguateFields', function () {
            // Find duplicate attributes in the fields.
            $duplicates = $this->pluck('attribute')->duplicates()->values()->flip()->toArray();

            return $this->map(function (Field $field) use (&$duplicates) {
                $field = clone $field;

                if (array_key_exists($field->attribute, $duplicates)) {
                    // Increment the counter while appending it to the attribute.
                    $field->attribute = $field->attribute . ':' . $duplicates[$field->attribute]++;
                }

                return $field;
            });
        });

        FieldCollection::macro('onlyRequested', function (NovaRequest $request) {
            $fields = $request->get('refined_fields');

            if (is_string($fields)) {
                $fields = explode(',', $fields);
            }

            if (empty($fields)) {
                return $this;
            }

            return $this
                ->disambiguateFields()
                ->filter(function (Field $field) use ($fields) {
                    return in_array($field->attribute, $fields);
                })
                ->values();
        });
    }

    /**
     * Register the card's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
            ->prefix('nova-vendor/refine-nova')
            ->group(__DIR__ . '/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
