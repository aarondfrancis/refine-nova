import VueCompositionApi from '@vue/composition-api';
import Card from './components/Card';

Nova.booting((Vue, router, store) => {
    Vue.config.devtools = true;

    Vue.component('refine-nova', Card);
    Vue.use(VueCompositionApi);

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
    Nova.request().interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response && error.response.status === 422) {
            // Emit an event with the error data over to our Card
            // component and then let the rejection fall through.
            Nova.$emit('validation-error', error.response);
        }

        return Promise.reject(error);
    });
}
