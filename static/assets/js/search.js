(function () {
'use strict'

let searchIndex = null
let searchInput = null
let searchResult = null


$(function() {
    searchInput = window['search-input']
    searchResult = window['search-result']
    if(!searchInput || !searchResult) {
        return
    }

    const clearResult = () => {
        while(searchResult.firstChild) {
            searchResult.firstChild.remove()
        }
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

        clearResult()

        for(const item of results) {
            const link = document.createElement('a')
            link.href = item.ref
            link.innerText = item.ref
            searchResult.appendChild(link)
        }
    })

    searchInput.addEventListener('keyup', (event) => {
        if(event.key == 'Escape') {
            event.target.value = ''
            clearResult()
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

    fetch('/' + document.documentElement.lang + '/index.json')
        .then((response) => response.json())
        .then((data) => {
            if(data) {
                searchIndex = lunr.Index.load(data)
            }
        })
        .catch((error) => console.error(error))
})

})()
