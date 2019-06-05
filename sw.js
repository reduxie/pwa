importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([

  {
    "url": "index.html",
    "revision": "a40871df1e3a91dd14b9e21363d4cc71"
  },
  {
    "url": "build/bundle.js",
    "revision": "d3072ab3693c185313018e404e07d914"
  },
  {
    "url": "client/",
    "revision": "6b73f45a2506a26e00e425688eaa6514"
  }
]);