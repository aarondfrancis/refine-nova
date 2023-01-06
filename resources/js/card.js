import VueCompositionApi from '@vue/composition-api';
import Card from './components/Card';
import { DatePickerPlugin } from '@hammerstone/refine-vue2-dev';

// Custom components for Nova 3.
import NovaDatePicker from './components/DatePicker';
import OrButton from './components/OrButton';
import GroupDivider from './components/GroupDivider';

Nova.booting((Vue, router, store) => {
  // Turn on for to get the Devtools to show up.
  // Vue.config.devtools = true;
  // __VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue

  // Required for Refine Vue2 to work.
  Vue.use(VueCompositionApi);

  // Use Nova's default date picker for Refine.
  Vue.use(DatePickerPlugin, {
    DatePicker: NovaDatePicker,
  });

  // Custom components for flavors.
  Vue.component('custom-or-button', OrButton);
  Vue.component('custom-group-divider', GroupDivider);

  // Main card.
  Vue.component('refine-nova', Card);

  attachInterceptors(router);
});

function attachInterceptors(router) {
  // Add a request interceptor so that we can add our Refine query params.
  Nova.request().interceptors.request.use(function (config) {
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

  // Add a response interceptor so we can catch validation errors.
  Nova.request().interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response && error.response.status === 422) {
        // Emit an event with the error data over to our Card
        // component and then let the rejection fall through.
        Nova.$emit('validation-error', error.response);
      }

      return Promise.reject(error);
    }
  );
}
