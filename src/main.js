import { getCookie, setCookie } from './cookie'
import algoliasearch from 'algoliasearch/lite'
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js'
import { renderItem } from './render'

import './style/custom.css'
import './style/autocomplete.css'


if(window['autocomplete']) {
    const searchClient = algoliasearch(
        'LME4M5PZIU',
        '9c19b1c1caa4b8aaa859e0cf3be89152'
    )

    autocomplete({
        container: '#autocomplete',
        detachedMediaQuery: '',
        classNames: {
            detachedSearchButton: 'icon icon-search'
        },
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
                    item({ item, components }) {
                        return renderItem(item, components)
                    }
                },
            }]
        },
    })
}


function checkLanguage(lang) {
    const list = ['en', 'ru']
    if(!!lang) {
        lang = lang.substring(0, 2)
        return (list.indexOf(lang) != -1) ? lang : list[0]
    } else {
        return list[0]
    }
}


export function getLanguage(lang) {
    lang = lang || getCookie('lang') || navigator.language
	return checkLanguage(lang)
}


export function setLanguage(lang) {
    lang = checkLanguage(lang)
    setCookie('lang', lang, 365);
}
