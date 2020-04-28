'use strict'

import Vue from 'vue'
import axios from 'axios'

let config = {
  baseURL: '/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
}
const _axios = axios.create(config);
_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)
// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    if (response.status === 401 && ['UnauthorizedAccess', 'InvalidToken'].indexOf(response.data.code) > -1) {
      Vue.auth.logout({
        redirect: { name: 'signIn' },
      });
    } else if (response.status === 500) {
      Vue.router.push({ name: '500' });
    }
    // Do something with response data
    let token = response.data.token;
    if (token) {
      config.headers.Authorization = `${ token }`;
      localStorage.setItem('access_token', token)
    }
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  },
)
const Plugin = {
  install: function (Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
      axios: {
        get () {
          return _axios
        },
      },
      $axios: {
        get () {
          return _axios
        },
      },
    })
  },
};
Vue.use(Plugin);
export default Plugin
