(function () {
'use strict';


window.startSearch = function(event) {
    event.preventDefault();
    window.scrollTo(0, 0);

    const modal = document.createElement('div');
    modal.classList.add('modal');

    document.body.appendChild(modal);

    document.addEventListener('keydown', function(event) {

    })
}


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

    document.addEventListener('keydown', function(event) {
        if(!(
            document.activeElement != document.body ||
            event.altKey ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.key != 's'
        )) {
            startSearch(event)
        }
    })
});

})();
