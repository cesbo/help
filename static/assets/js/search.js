(function () {
'use strict';

let searcher = null;
let searchInput = null;
let searchResult = null;


function clearSearchResult() {
    while(searchResult.firstChild) searchResult.removeChild(searchResult.firstChild);
}


function onSearch() {
    clearSearchResult();

    const value = searchInput.value.trim();
    if(value.length < 3 || !searcher) { return }

    let results = searcher.search(value);
    if(results.length === 0) { return }

    for(let item of results.slice(0, 20)) {
        const page = item.doc;
        const a = document.createElement('a');
        a.href = page.link;
        a.textContent = (!!page.parent) ? page.parent + ' > ' + page.title : page.title;
        searchResult.appendChild(a);

        const text = page.content;
        if(text != page.title) {
            const p = document.createElement('p');
            p.textContent = (text.length > 80) ? (text.slice(0, 80) + '...') : text;
            searchResult.appendChild(p);
        }
    }
}


function init(data) {
    let counter = 0;
    if(!data) return;

    searcher = elasticlunr(function () {
        if(window.location.pathname.includes('ru')) {
            this.use(elasticlunr.multiLanguage('en', 'ru'));
        }

        this.addField('title');
        this.addField('content');
        this.setRef('id');
    });

    data.forEach(e => {
        searcher.addDoc({ id: ++counter, ...e });
    });

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
