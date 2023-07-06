<template>
<div class="not-prose">
    <SiteCategory :nav="navigation" />
</div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const route = useRoute()

const query: QueryBuilderParams = {
    where: [
        {
            _path: {
                $contains: route.path,
            },
        },
    ],
    sort: [
        { date: -1 },
    ],
}

let [ navigation ] = await fetchContentNavigation(query)
while(navigation && navigation._path != route.path && navigation.children) {
    navigation = navigation.children[0]
}
</script>
