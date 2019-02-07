/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-117a510ccb97b16f3471.js"
  },
  {
    "url": "app-ed9676ca7bc3b2f43d4b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8925b46dec738eb1064b.js"
  },
  {
    "url": "index.html",
    "revision": "225c940d96e81c9027afba83319cc2e4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e7ce716b63c427012b57eb1b64992d33"
  },
  {
    "url": "component---src-pages-index-tsx.66dc472aa57249952a5f.css"
  },
  {
    "url": "component---src-pages-index-tsx-1390dfdaded50ba1bedd.js"
  },
  {
    "url": "0-a91f5aee134f7d758d66.js"
  },
  {
    "url": "static/d/670/path---index-6a9-N9WcRLOVcyW1W2scmw582PVE.json",
    "revision": "6dbc78464c4e22ae14407b63205b504d"
  },
  {
    "url": "component---src-pages-404-tsx.66dc472aa57249952a5f.css"
  },
  {
    "url": "component---src-pages-404-tsx-f003e47f3f4561048796.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c2846a2f77666cf39711566c9b117620"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});