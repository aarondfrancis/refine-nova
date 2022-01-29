import VueCompositionApi from '@vue/composition-api';
import Card from './components/Card';

Nova.booting((Vue, router, store) => {
  Vue.config.devtools = true;

  Vue.component('refine-nova', Card);
  Vue.use(VueCompositionApi);

  monkeyPatchNova(router);
});

function monkeyPatchNova(router) {
  // We're going to do some monkey-patching here so that we can intercept
  // every request that Nova makes and check to see if it's one that
  // needs to be Refined. First, we copy the real function to a
  // temp variable and then reassign it to our own function.
  let originalRequestFunction = Nova.request;

  Nova.request = function (options) {
    // Call the parent method, passing along the correct `this`.
    let instance = originalRequestFunction.call(this, options);

    instance.interceptors.request.use(function (config) {
      // Instead of checking route patterns, just piggyback onto
      // any request where the filters are included, because
      // we'll want to Refine all of those requests.
      if (_.has(config, 'params.filters')) {
        for (let param in router.currentRoute.query) {
          // Add every query param that ends in _refine, because
          // each resource will start with something different,
          // but they all end in _refine.
          if (_.endsWith(param, '_refine')) {
            config.params[param] = router.currentRoute.query[param];
          }
        }
      }

      return config;
    });

    return instance;
  };
}
