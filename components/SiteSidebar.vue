<template>
    <aside>
        <nav class="mt-6 space-y-4">
            <div
                v-for="product in menuItems"
                :key="product.title"
            >
                <div
                    class="
                        font-semibold text-zinc-600 dark:text-zinc-400
                        mb-4
                    "
                >{{ product.title }}</div>
                <details
                    v-for="group in product.items"
                    :key="group.title"
                    :open="$route.path.startsWith(group.path)"
                >
                    <summary
                        class="
                            text-sm font-semibold text-gray-500 dark:text-gray-400
                            cursor-pointer
                            leading-6
                        "
                    >{{ group.title }}</summary>

                    <div class="space-y-5 py-2">
                        <ul
                            v-for="sub in group.items"
                            :key="sub.title"
                            class="
                                m-0 p-0
                                ml-1 pl-3
                                border-l border-gray-200 dark:border-zinc-600
                            "
                        >
                            <li
                                v-for="item in sub.items"
                                :key="item.title"
                                class="leading-none"
                            >
                                <NuxtLink
                                    :to="item.path"
                                    class="
                                        text-sm
                                        text-gray-500 dark:text-gray-400
                                        hover:text-gray-900 dark:hover:text-gray-200
                                        leading-6
                                    "
                                    exact-active-class="font-semibold"
                                >{{ item.title }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </details>
            </div>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types'

interface ContentNavItem {
    title: string,
    path: string,
    items: ContentNavItem[] | undefined,
}

const localePath = useLocalePath()
const { locale } = useI18n()

const makeSidebarGroup = (item: NavItem): ContentNavItem => {
    const result: ContentNavItem = {
        title: item.title,
        path: localePath(item._path),
        items: undefined,
    }

    result.items = item.children
        ?.map((n) => makeSidebarGroup(n))
        .filter(n => item._path !== n.path)

    return result
}

const { data: menuItems } = useAsyncData(
    'sidebar-items',
    async () => {
        const navigation = await fetchContentNavigation({
            where: [
                {
                    _locale: locale.value,
                },
            ],
        })

        return navigation?.map(product => {
            return {
                title: product.title,
                items: product.children?.map(n => makeSidebarGroup(n)),
            }
        }) ?? []
    },
    {
        watch: [ locale ]
    },
)
</script>
