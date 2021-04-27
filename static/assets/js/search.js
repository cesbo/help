(function () {
'use strict';

function init(data) {
    window.fuse = new Fuse(data, {
        keys: ['title', 'content'],
        includeMatches: true,
    });
}

// TODO: start fuse only in searchbox focus

// TODO: make index with `Fuse.createIndex(['title', 'content'], data)`
//       store index to localstorage
//       if response from cache use index from localstorage

fetch('/' + document.documentElement.lang + '/index.json')
    .then(response => { console.log(response); response.json() })
    .then(json => init(json))
    .catch(error => console.error(error));

})();
