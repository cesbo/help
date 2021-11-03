(function () {
'use strict'

let searchIndex = null
let searchInput = null


function onSearch(event) {
    console.log(event)


    // const value = searchInput.value.trim();
    // if(value.length < 3 || !searcher) { return }

    // let results = searcher.search(value);
    // if(results.length === 0) { return }

    // for(let item of results.slice(0, 20)) {
    //     const page = item.doc;
    //     const a = document.createElement('a');
    //     a.href = page.link;
    //     a.textContent = (!!page.parent) ? page.parent + ' > ' + page.title : page.title;
    //     searchResult.appendChild(a);

    //     const text = page.content;
    //     if(text != page.title) {
    //         const p = document.createElement('p');
    //         p.textContent = (text.length > 80) ? (text.slice(0, 80) + '...') : text;
    //         searchResult.appendChild(p);
    //     }
    // }
}


$(function() {
    searchInput = window['search-input']
    if(!searchInput) {
        return
    }

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value.trim()
        if(value.length < 3 || !searchIndex) {
            return
        }
        const results = searchIndex.search(value)
        if(results.length == 0) {
            return
        }
        // TODO: show result
        console.log(results)
    })

    searchInput.addEventListener('keyup', (event) => {
        if(event.key == 'Escape') {
            event.target.value = ''
            // TODO: clear search
            event.target.blur()
        }
    })

    document.addEventListener('keyup', (event) => {
        const x = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey
        if(!x && document.activeElement == document.body && event.key == 's') {
            event.preventDefault()
            window.scrollTo(0, 0)
            searchInput.focus()
        }
    })

    // TODO: remove index.json from static/assets
    // fetch('/' + document.documentElement.lang + '/index.json')
    fetch('/assets/js/index.json')
        .then((response) => response.json())
        .then((data) => {
            if(data) {
                searchIndex = lunr.Index.load(data)
            }
        })
        .catch((error) => console.error(error))
})

})()
