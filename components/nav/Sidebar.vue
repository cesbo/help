<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/types';
import CollabsibleItem from './CollapsibleItem.vue';
import { delocalizePath } from '../utils/UrlHelper';

const route = useRoute()
const { locale } = useI18n()
const delocalizedPath = delocalizePath(route.path, locale.value)

const { data: navigation } = await useAsyncData('sidebarMenu', () => fetchContentNavigation({
    where: [
        {
            _locale: locale.value
        },
    ],
}))

const navigationItemToCollapsibleProp = (navItem) => {
    if (!navItem) {
        return undefined
    }
    const result = {
        title: navItem.title,
        path: navItem._path,
        children: navItem.children?.map(navigationItemToCollapsibleProp) ?? [],
    }
    return result
}

const byProductNavItems = navigation.value?.map(product => {
    const navItem = {
        productName: product.title,
        navItems: product.children?.map(navigationItemToCollapsibleProp).filter(childItem => childItem !== undefined) ?? []
    }
    return navItem
}) ?? []

</script>
<template>
    <aside class="border-r border-gray-200 dark:border-zinc-600">
        <div v-for="productNavItem in byProductNavItems" class="mt-4">
            <h2 class="text-gray-900
                    text-md sm:text-xl
                    font-bold
                    mb-1">
                {{ productNavItem.productName }}
            </h2>
            <CollabsibleItem v-for="navItem in productNavItem.navItems" :treeItem="navItem" />
        </div>
    </aside>
</template>