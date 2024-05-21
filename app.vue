<template>
    <div id="app" class="w-full h-full min-h-dvh flex flex-col relative items-center py-3">
        <NuxtLoadingIndicator />
        <SiteMenu class="w-full" />
        <ContainerSection class="flex grow">
            <NavSidebar
                v-show="isContentPage"
                class="hidden lg:inline-block flex-none lg:w-60 xl:w-80"
            />
            <div class="flex-1 w-full px-4">
                <div class="px-4 py-20">
                    <div class="max-w-xl mx-auto h-14 mb-20 z-10">
                        <SiteSearch />
                    </div>
                    <NuxtPage ref="pageRef" />
                </div>
            </div>
            <aside v-show="isContentPage" class="hidden xl:inline-block flex-none w-80"/>
        </ContainerSection>
        <SiteFooter class="w-full" />
    </div>
</template>

<script setup lang="ts">
import ContainerSection from './components/layout/ContainerSection.vue';
import { delocalizePath } from './components/utils/UrlHelper';
import { useRoute } from 'vue-router';
const { locale } = useI18n()
const route = useRoute()
const pageRef = ref()

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

const pageContent = computed(() => pageRef?.value?.pageRef)

watch (pageContent, () => {
    const currentLocale = locale.value
    const currentRoute = route.path
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
