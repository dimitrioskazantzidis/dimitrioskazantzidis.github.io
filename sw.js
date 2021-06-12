self.addEventListener('install', function (event) {
    console.log('The service worker is being installed.');
    event.waitUntil(
        caches.open('Damian Lillard').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/favicon.ico',
                '/manifest.json',
                '/assets/125px-Damian_Lillard_shoots_over_Draymond_Green.jpg',
                '/assets/170px-Damian_Lillard1_(cropped)_(cropped).jpg',
                '/assets/220px-Damian_Lillard_against_the_Cleveland_Cavaliers_(cropped).jpg',
                '/assets/app-icons-twitter.png',
                '/assets/facebook.jpeg',
                '/assets/unnamed.png',
                '/assets/192.png',
                '/assets/512.png',
                '/assets/USXzYA.jpg',
                '/assets/youtube.png',
                '/css/LogInstyle.css',
                '/css/mystyle.css',
                '/html/Awards.html',
                '/html/Career.html',
                '/html/Homepage.html',
                '/html/Statistics.html',
                '/js/calculateAge.js',
                '/js/dynamicTable.js',
				'/js/LogIn.js',
				'/js/myjavascript.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('The service worker is serving the asset.');
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || caches.match('/index.html');
        })
    );
});