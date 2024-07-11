<template>
<nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-2 text-base text-gray-500">
        <li>
            <NuxtLink :to="localePath('/')" class="hover:text-brand">
                <HomeIcon
                    class="h-4 w-4 flex-shrink-0"
                    aria-hidden="true"
                />
                <span class="sr-only">{{ $t("breadcrumbs.home") }}</span>
            </NuxtLink>
        </li>

        <li
            v-for="item in breadcrumb" :key="item.path"
            class="flex items-center"
        >
            <ChevronRightIcon
                class="h-4 w-4 flex-shrink-0"
                aria-hidden="true"
            />
            <NuxtLink
                :to="localePath(item.path)"
                class="
                    ml-2
                    text-base
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
} from '@heroicons/vue/20/solid';

const localePath = useLocalePath()
const { locale } = useI18n()

const props = defineProps<{
    path: string
}>()

const data = await fetchContentNavigation({
    where: [
        {
            _path: props.path,
            _locale: locale.value,
        },
    ],
})

const navigation = data[0]

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
        const current = item._path === props.path

        // Unfortunately, fetchContentNavigation does not translate titles of parent nodes
        // Therefore, the current solution is to manually query titles with clarified locale
        const page = await queryContent().where({
            _path: item._path,
            _locale: locale.value
        }).only('title').findOne()

        breadcrumb.push({
            title: page.title ?? item.title,
            path: localePath(item._path),
            current
        })

        if(current) {
            break
        }

        children = item.children
    }
}
</script>
