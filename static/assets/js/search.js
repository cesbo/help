(function () {
'use strict';

function init(data) {
    window.fuse = new Fuse(data, {
        keys: ['title', 'content'],
        includeMatches: true,
    });
}

$(function() {
    fetch('/' + document.documentElement.lang + '/index.json')
        .then(response => { console.log(response); response.json() })
        .then(json => init(json))
        .catch(error => console.error(error));
});

})();
