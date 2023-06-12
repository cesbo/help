import {
    SearchIndex,
    default as algoliasearch,
} from 'algoliasearch'

export default defineNuxtPlugin((nuxtApp) => {
    const { appId, siteKey, indexName } = nuxtApp.$config.public.algolia

    const client = algoliasearch(appId, siteKey)
    const index: SearchIndex = client.initIndex(indexName)

    return {
        provide: {
            algolia: index,
        },
    }
})
