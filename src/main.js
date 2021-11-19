import algoliasearch from 'algoliasearch/lite'
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js'

import './style/custom.css'
import '@algolia/autocomplete-theme-classic'

if(window['autocomplete']) {
    const searchClient = algoliasearch(
        'LME4M5PZIU',
        '9c19b1c1caa4b8aaa859e0cf3be89152'
    )

    autocomplete({
        container: '#autocomplete',
        detachedMediaQuery: '',
        getSources() {
            return [{
                sourceId: 'hits',
                getItems({ query }) {
                    return getAlgoliaResults({
                        searchClient,
                        queries: [{
                            indexName: 'dev_CESBO_' + document.documentElement.lang,
                            query,
                            params: {
                                hitsPerPage: 10,
                            },
                        }],
                    })
                },
                getItemUrl({ item }) {
                    return item.link
                },
                templates: {
                    item({ item, createElement, Fragment }) {
                        return createElement('div', {
                            dangerouslySetInnerHTML: {
__html: `<a className="aa-ItemLink" href="${item.link}">
    <div className="aa-ItemContent">
        <div className="aa-ItemContentBody">
            <div className="aa-ItemContentTitle">
                ${item.category}: ${item.title}
            </div>
        </div>
    </div>
</a>`
                            }
                        })
                    }
                },
            }]
        },
    })
}

/* Multilanguage */

function setCookie(cname, cvalue, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    document.cookie = cname + '=' + cvalue + ';expires=' + d.toUTCString() + ';path=/'
}

function getCookie(cname) {
    const name = cname + '='
    const ca = decodeURIComponent(document.cookie).split(';')
    for(var i = 0; i < ca.length; i++) {
        let c = ca[i]
        while(c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if(c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}

function checkLanguage(lang) {
    const list = ['en', 'ru'];
    if(!!lang) {
        lang = lang.substring(0, 2);
        return (list.indexOf(lang) != -1) ? lang : list[0];
    } else {
        return list[0];
    }
}

export function getLanguage(lang) {
    lang = lang || getCookie('lang') || navigator.language;
	return checkLanguage(lang);
}

export function setLanguage(lang) {
    lang = checkLanguage(lang);
    setCookie('lang', lang, 365);
}
