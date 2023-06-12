import {
    SearchOptions,
} from '@algolia/client-search'

import type {
    AlgoliaIndexObject,
} from '../../types'

export default function (options?: SearchOptions) {
    const nuxtApp = useNuxtApp()

    const result = ref<AlgoliaIndexObject[] | null>(null)

    const search = async (query: string) => {
        const value = query.trim()

        if(value.length < 3) {
            result.value = null
            return
        }

        const response = await nuxtApp.$algolia.search<AlgoliaIndexObject>(value, options)
        result.value = response.hits
    }

    return { result, search }
}
