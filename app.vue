<template>
    <div id="app" class="w-full h-full flex flex-col items-center px-6 py-3">
        <SiteMenu class="w-full" />
        <ContainerSection class="flex">
            <Sidebar v-if="isContentPage" class="flex-none w-60"/>
            <div class="flex-1 w-full px-4">
                <NuxtLoadingIndicator />
                <div class="px-4 py-20">
                    <div class="max-w-xl mx-auto h-14 mb-20 z-10">
                        <SiteSearch />
                    </div>
                    <NuxtPage />
                </div>
            </div>
            <div v-if="isContentPage" class="flex-none w-60"/>
        </ContainerSection>
        <SiteFooter class="w-full" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import Sidebar from './components/nav/Sidebar.vue';
import ContainerSection from './components/layout/ContainerSection.vue';
import { delocalizePath } from './components/utils/UrlHelper';
import { useRoute } from 'vue-router';
const { locale } = useI18n()
const route = useRoute()

const i18nHead = useLocaleHead({
    addSeoAttributes: true
})

useHead({
    htmlAttrs: {
        lang: i18nHead.value.htmlAttrs!.lang
    }
})

useHead({
    script: [
        {
            src: 'https://sa-help.cesbo.com/latest.js',
            async: true,
            defer: true,
            'data-collect-dnt': true,
        },
    ],
})

const isContentPage = ref(false)

watch(route, (oldPage, newPage) => {
    const currentLocale = locale.value
    const currentRoute = oldPage?.path
    const contentPage = currentRoute ? delocalizePath(currentRoute, currentLocale) !== "/" : false
    isContentPage.value = contentPage
}, {immediate: true})

</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    html {
        @apply h-full;
    }

    body {
        @apply h-full bg-white text-black dark:bg-zinc-800 dark:text-white;
    }

    #__nuxt {
        @apply h-full;
    }
}
</style>
