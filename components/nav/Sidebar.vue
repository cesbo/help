<template>
    <aside class="border-r border-gray-200 dark:border-zinc-600 px-6">
        <div v-for="productNavItem in menuItems">
            <!-- <span
                class="text-gray-900 font-semibold mb-1 text-sm"
            >{{ productNavItem.productName }}</span> -->
            <NavSidebarGroup
                v-for="navItem in productNavItem.navItems"
                :treeItem="navItem"
            />
        </div>
    </aside>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types'

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

const reloadSidebarContents = async (localeToUse: string) => {
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
