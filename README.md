# Refine for Laravel Nova

[Refine](https://hammerstone.dev/refine/laravel/docs/main) is a powerful, visual query builder for Laravel (and Rails!)

This repository is the integration for Refine and Laravel Nova.

Refine is a paid package, currently in early access. If you would like to try it out, please send me an email at aaron@hammerstone.dev or DM me [on Twitter](https://twitter.com/aarondfrancis).

![Refine Nova](art/refine-nova.png)

## Installation

To use Refine with Nova, you must first require the package `composer require hammerstone/refine-nova`. This will
install `hammerstone/refine-laravel` as well.

## Integration

To use Refine with one of your Nova resources, add the `RefinesModels` trait to your resource.

```php

class Company extends Resource
{
    use RefinesModels;
}
```

This will require you to implement a single method called `refineFilter`. From this method you will return the filter
that applies to this resource. (To learn more about creating filters, see
the [Refine documentation](https://hammerstone.dev/refine/laravel/docs/main).)

```php
public static function refineFilter(NovaRequest $request)
{
    // The filter to use for this resource. 
    return CompanyFilter::class;
}
```

To accomplish the actual filtering, you'll want to modify the `indexQuery` method to activate the Refine filter:

```php
public static function indexQuery(NovaRequest $request, $query)
{
    // Run this request + query through Refine.
    static::refine($request, $query);
}
```

Finally, to show the builder on the frontend, you'll need to add the Refine card.

```php
public function cards(Request $request)
{
    return [
        RefineCard::forFilter(static::refineFilter($request))
    ];
}
```

That's all you need to do! 