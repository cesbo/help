<template>
<ul>
    <li
        v-for="item in nav.children?.filter((x) => x._path != nav._path)"
        :key="item._path"
    >
        <template v-if="item.children">
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
                    mt-10
                "
            >{{ item.title }}</h2>

            <SiteCategory :nav="item" />
        </template>

        <template v-else>
            <NuxtLink
                :to="item._path"
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
                >{{ item.title }}</span>
            </NuxtLink>
        </template>
    </li>
</ul>
</template>

<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import type { NavItem } from '@nuxt/content/dist/runtime/types'

defineProps<{
    nav: NavItem
}>()
</script>
