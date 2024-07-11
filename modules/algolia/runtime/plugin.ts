import {
    SearchIndex,
    default as algoliasearch,
} from 'algoliasearch'

import type {
    AlgoliaIndexObject,
} from '../types'

export default defineNuxtPlugin((nuxtApp) => {
    const { appId, siteKey, indexName, locales } = nuxtApp.$config.public.algolia

    const client = algoliasearch(appId, siteKey)

    const indexes: { [key: string]: SearchIndex } = {}

    for(const locale of locales) {
        indexes[locale] = client.initIndex(`${ locale }_${ indexName }`)
    }

    const search = async(value: string, locale: string, options?: any) => {
        return indexes[locale].search<AlgoliaIndexObject>(value, options)
    }

    return {
        provide: {
            algolia: { search },
        },
    }
})
