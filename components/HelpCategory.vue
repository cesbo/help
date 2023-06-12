<template>
<div>
    <template v-if="navigation">
        <h1
            :style="{
                'color': navigation.color,
            }"
            class="text-3xl font-bold"
        >{{ navigation.title }}</h1>
        <div
            v-for="section in navigation.children"
            :key="section.path"
            class="mt-10"
        >
            <h2
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
                            class="w-4 h-4"
                            :style="{ 'color': navigation.color }"
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
    </template>
</div>
</template>

<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/outline'

import type { QueryBuilderParams, NavItem } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
    title: string,
}>()

useHead({
    title: props.title,
})

// TODO: SEO description

const route = useRoute()

const query: QueryBuilderParams = {
    where: [
        {
            _path: new RegExp('^' + route.path + '/'),
        },
    ],
    sort: [
        { date: -1 },
    ],
}

type Category = {
    title: string,
    color: string,
    children: NavItem[],
}

const { data: navigation } = await useAsyncData<Category>(
    `content-navigation-${ route.path }`,
    async () => {
        const result: Category = {
            title: '',
            color: '',
            children: [],
        }

        const [ astra ] = await fetchContentNavigation(query)
        const [ category ]: NavItem[] = astra.children!

        result.color = astra.color
        result.title = category.title
        result.children = category.children!

        return result
    }
)
</script>
