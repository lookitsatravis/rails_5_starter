import Vue from 'vue';

import '../libs/promise-finally';
import '../styles/app.scss';

import App from './App.vue';
import router from '../routers/application';

// First, setup error handling for Sentry
// From https://github.com/getsentry/raven-js/blob/master/plugins/vue.js

/* eslint-disable */
if (window.Raven) {
  window.Raven.config(window.$$App.config.sentryDsn, {
    logger: 'javascript',
    ignoreErrors: [
      // Random plugins/extensions
      'top.GLOBALS',
      // See: http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html
      'originalCreateNotification',
      'canvas.contentDocument',
      'MyApp_RemoveAllHighlights',
      'http://tt.epicplay.com',
      'Can\'t find variable: ZiteReader',
      'jigsaw is not defined',
      'ComboSearch is not defined',
      'http://loading.retry.widdit.com/',
      'atomicFindClose',
      // Facebook borked
      'fb_xd_fragment',
      // ISP "optimizing" proxy - `Cache-Control: no-transform` seems to reduce this. (thanks @acdha)
      // See http://stackoverflow.com/questions/4113268/how-to-stop-javascript-injection-from-vodafone-proxy
      'bmi_SafeAddOnload',
      'EBCallBackMessageReceived',
      // See http://toolbar.conduit.com/Developer/HtmlAndGadget/Methods/JSInjection.aspx
      'conduitPage',
      // Generic error code from errors outside the security sandbox
      // You can delete this if using raven.js > 1.0, which ignores these automatically.
      'Script error.'
    ],
    ignoreUrls: [
      // Facebook flakiness
      /graph\.facebook\.com/i,
      // Facebook blocked
      /connect\.facebook\.net\/en_US\/all\.js/i,
      // Woopra flakiness
      /eatdifferent\.com\.woopra-ns\.com/i,
      /static\.woopra\.com\/js\/woopra\.js/i,
      // Chrome extensions
      /extensions\//i,
      /^chrome:\/\//i,
      // Other plugins
      /127\.0\.0\.1:4001\/isrunning/i, // Cacaoweb
      /webappstoolbarba\.texthelp\.com\//i,
      /metrics\.itunes\.apple\.com\.edgesuite\.net\//i
    ]
  }).install();

  window.Raven.setExtraContext({
    version: process.env.VERSION,
    env: process.env.NODE_ENV,
    appEnv: process.env.APP_ENV,
  });
}

// Disable in development
if (process.env.NODE_ENV === 'development') {
  if (window.Raven) {
    window.Raven.setShouldSendCallback(() => {
      return false;
    });
    window.Raven.isSetup = () => {
      return true;
    };
  }
}

const formatComponentName = (vm) => {
  if (vm.$root === vm) {
    return 'root instance';
  }

  const name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;

  return (
    (name ? 'component <' + name + '>' : 'anonymous component') +
    (vm._isVue && vm.$options.__file ? ' at ' + vm.$options.__file : '')
  );
}

const oldVueErrorHandler = Vue.config.errorHandler;
const VueErrorHandler = (error, vm, info) => {
  const metaData = {};

  // vm and lifecycleHook are not always available
  if (Object.prototype.toString.call(vm) === '[object Object]') {
    metaData.componentName = formatComponentName(vm);
    metaData.propsData = vm.$options.propsData;
  }

  if (typeof info !== 'undefined') {
    metaData.lifecycleHook = info;
  }

  if (window.Raven) {
    window.Raven.captureException(error, {
      extra: metaData,
    });
  }

  if (typeof oldVueErrorHandler === 'function') {
    oldVueErrorHandler.call(this, error, vm, info);
  }
};

Vue.config.errorHandler = VueErrorHandler;
/* eslint-enable */

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('div'));
  const app = new Vue({
    el,
    router,
    render: h => h(App),
  });
});
