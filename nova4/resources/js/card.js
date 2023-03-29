import Card from './components/Card'
import endsWith from 'lodash/endsWith'
import { RefinePlugin } from '@hammerstone/refine-vue3'

import SelectIcon from './components/SelectIcon'
import OrButton from './components/OrButton'
import GroupDivider from './components/GroupDivider'

Nova.booting((Vue, store) => {
  Vue.component('custom-select-icon', SelectIcon)
  Vue.component('custom-or-button', OrButton)
  Vue.component('custom-group-divider', GroupDivider)
  Vue.use(RefinePlugin, {
    showLocators: true,
  })

  // Turn on for to get the Devtools to show up.
  // Vue.config.devtools = true;
  // __VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue

  Vue.component('refine-nova', Card)
})

// We have to wrap the Nova.request method to be able to attach our
// axios interceptors. In Nova 3, axios was a singleton, but in
// Nova 4 axios gets created on every call of Nova.request, so
// we can't attach the interceptors once to the singleton.
const originalNovaRequest = Nova.request
Nova.request = options => {
  // Call the original without any options
  // to get back the axios instance.
  let axios = originalNovaRequest.call(Nova)

  attachInterceptors(axios)

  // Mimic what's in the original function.
  if (options) {
    return axios(options)
  }

  return axios
}

function attachInterceptors(axios) {
  // Add a request interceptor so that we can add our Refine query params.
  axios.interceptors.request.use(function (config) {
    let shouldAttach =
      // Piggyback onto any request where the filters are included,
      // because we'll want to Refine all of those requests.
      config?.params?.hasOwnProperty('filters') ||
      // Also attach to the cards endpoint, so that we can
      // get the right blueprint on initial load.
      config?.url?.endsWith('/cards')

    if (shouldAttach) {
      // Add every query param that ends in _refine, because
      // each resource will start with something different,
      // but they all end in _refine.
      new URLSearchParams(window.location.search).forEach((value, key) => {
        if (endsWith(key, '_refine')) {
          if (!config.params) {
            config.params = {}
          }
          config.params[key] = value
        }
      })
    }

    return config
  })

  // Add a response interceptor so we can catch validation errors.
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 422) {
        // Emit an event with the error data over to our Card
        // component and then let the rejection fall through.
        Nova.$emit('validation-error', error.response)
      }

      return Promise.reject(error)
    }
  )
}
