<template>
<div class="not-prose space-y-10">
    <div
        v-if="navigation"
        v-for="section in navigation.children"
        :key="section.path"
    >
        <h2
            v-if="navigation.showTitle"
            class="
                text-sm
                font-bold
                leading-10
                tracking-tight
                text-gray-400
                border-b
                border-gray-200
                pb-2
                mb-2
            "
        >{{ section.title }}</h2>
        <ul>
            <li
                v-for="article in section.children"
                :key="article.path"
                class="
                    flex
                    w-full
                    items-start
                    justify-between
                    text-left
                    text-gray-900
                "
            >
                <NuxtLink
                    :to="article._path"
                    class="
                        flex
                        w-full
                        items-center
                        text-left
                        gap-x-2
                        py-2
                    "
                >
                    <DocumentTextIcon
                        class="w-4 h-4 text-sky-500"
                    />
                    <span
                        class="
                            text-lg
                            font-semibold
                            leading-7
                            text-gray-900
                            hover:text-sky-400
                        "
                    >{{ article.title }}</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</div>
</template>

<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
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

const { data: navigation } = await useAsyncData(route.path, async () => {
    const [ navigation ] = await fetchContentNavigation(query)
    const [ category ] = navigation.children!

    if(category._path == route.path) {
        // category
        category.showTitle = true
        // remove self from children
        category.children = category.children?.filter((item) => item._path != route.path)
    }

    return category
})
</script>
