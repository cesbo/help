<script setup lang="ts">
import { ref, watch } from "vue";
import CollabsibleItem from './CollapsibleItem.vue';
import type { NavItem } from "@nuxt/content/types";

const { locale } = useI18n()
const menuItems = ref<ByProductNavItem[]>([])

interface ContentNavItem {
    title: string,
    path: string,
    children: ContentNavItem[],
    isTopLevelGroup: boolean
}

interface ByProductNavItem {
    productName: string,
    navItems: ContentNavItem[]
}

const reloadSidebarContents = async (localeToUse) => {
    const { data: navigation } = await useAsyncData('sidebarMenu', () => fetchContentNavigation({
        where: [
            {
                _locale: localeToUse
            },
        ],
    }))

    const byProductNavItems: ByProductNavItem[] = navigation.value?.map(product => {
        const childNavItems: ContentNavItem[] = product.children
            ?.map(n => navigationItemToCollapsibleProp(n, true))
            .filter(Boolean)
            .flatMap(childItem => childItem || []) ?? []
        const navItem: ByProductNavItem = {
            productName: product.title,
            navItems: childNavItems,
        }
        return navItem
    }) ?? []

    menuItems.value = byProductNavItems
} 

watch(locale, reloadSidebarContents, { immediate: true })

const navigationItemToCollapsibleProp = (navItem: NavItem, isTopLevelGroup: boolean = false): ContentNavItem => {
    const result = {
        title: navItem.title,
        path: navItem._path,
        children: navItem.children
            ?.map(n => navigationItemToCollapsibleProp(n))
            .flatMap((x) => x || [])
            .filter((x) => x.path !== navItem._path) ?? [],
        isTopLevelGroup: isTopLevelGroup
    }
    return result
}

</script>
<template>
    <aside class="border-r border-gray-200 dark:border-zinc-600 px-6">
        <div v-for="productNavItem in menuItems" class="pr-2 mt-4">
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