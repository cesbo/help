<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/types';

const { locale } = useI18n()

const query: QueryBuilderParams = {
    where: [{ _locale: locale.value }],
    sort: [
        { date: -1 },
    ],
}

</script>
<template>
    <aside class="fixed top-20 left-0 pl-8">
        <transition name="fade">
            <ContentNavigation v-slot="{ navigation }" :query="query">
                <div class="flex flex-col gap-6">
                    <div v-for="product in navigation" :key="product._path">
                        <p class="text-2xl">{{ product.title }}</p>
                        <ul>
                            <li class="my-1" v-for="category in product.children">
                                <NuxtLinkLocale class="text-m" :to="category._path">{{ category.title }}
                                </NuxtLinkLocale>
                            </li>
                        </ul>
                    </div>
                </div>
            </ContentNavigation>
        </transition>
    </aside>

</template>