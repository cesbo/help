(function () {
'use strict';


let fuse = null;
let searchInput = null;
let searchResult = null;


function clearSearchResult() {
    while(searchResult.firstChild) searchResult.removeChild(searchResult.firstChild);
}


function onSearch() {
    clearSearchResult();

    const value = searchInput.value.trim();
    if(value.length < 3 || !fuse) { return }

    let results = fuse.search(value);
    if(results.length === 0) { return }

    for(let item of results.slice(0, 20)) {
        const page = item.item;
        const a = document.createElement('a');
        a.href = page.link;
        a.textContent = (!!page.parent) ? page.parent + ' > ' + page.title : page.title;
        searchResult.appendChild(a);

        const matches = item.matches;
        const text = matches[0].value;
        if(text != page.title) {
            const p = document.createElement('p');
            p.textContent = (text.length > 80) ? (text.slice(0, 80) + '...') : text;
            searchResult.appendChild(p);
        }
    }
}


function init(data) {
    if(!data) return;

    fuse = new Fuse(data, {
        keys: ['title', 'content'],
        includeMatches: true,
        shouldSort: true,
        location: 0,
        distance: 100,
        threshold: 0.4,
    })

    onSearch()
}


$(function() {
    searchInput = window['search-input'];
    searchResult = window['search-result'];
    if(!searchInput || !searchResult) return;

    searchInput.addEventListener('input', onSearch);
    searchInput.focus();

    fetch('/' + document.documentElement.lang + '/index.json')
        .then(response => response.json())
        .then(json => init(json))
        .catch(error => console.error(error));
});

})();
