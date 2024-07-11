import type {
    SearchOptions,
} from '@algolia/client-search'

import type {
    AlgoliaIndexObject,
} from '../../types'

export default function (search: Ref<string>, locale: Ref<string>, options?: SearchOptions) {
    const nuxtApp = useNuxtApp()

    const result = ref<AlgoliaIndexObject[] | null>(null)

    watch([search, locale], async ([query, loc]) => {
        const value = query.trim()
        if(value.length < 3) {
            result.value = null
            return
        }

        const response = await nuxtApp.$algolia.search(value, loc, options)
        result.value = response.hits
    }, { immediate: true })

    return { result }
}
