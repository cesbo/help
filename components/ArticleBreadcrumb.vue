<template>
<nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-2">
        <li>
            <NuxtLink href="/" class="text-gray-400 hover:text-brand">
                <HomeIcon
                    class="h-4 w-4 flex-shrink-0"
                    aria-hidden="true"
                />
                <span class="sr-only">Home</span>
            </NuxtLink>
        </li>

        <li
            v-for="item in breadcrumb" :key="item.path"
            class="flex items-center"
        >
            <ChevronRightIcon
                class="h-4 w-4 flex-shrink-0 text-gray-400"
                aria-hidden="true"
            />
            <NuxtLink
                :href="item.path"
                class="
                    ml-2
                    text-sm
                    text-gray-500
                    hover:text-brand
                "
                :aria-current="item.current ? 'page' : undefined"
            >{{ item.title }}</NuxtLink>
        </li>
    </ol>
</nav>
</template>

<script setup lang="ts">
import {
    ChevronRightIcon,
    HomeIcon,
} from '@heroicons/vue/20/solid'

const props = defineProps<{
    path: string
}>()

const [ navigation ] = await fetchContentNavigation({
    where: [
        { _path: props.path },
    ],
})

type BreadcrumbItem = {
    title: string
    path: string
    current: boolean
}

const breadcrumb: BreadcrumbItem[] = []
{
    let children = navigation.children
    while(children) {
        const item = children[0]
        const current = item._path == props.path

        breadcrumb.push({
            title: item.title,
            path: item._path,
            current
        })

        if(current) {
            break
        }

        children = item.children
    }
}
</script>
