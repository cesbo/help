<template>
    <div id="app" class="w-full h-full min-h-dvh flex flex-col relative items-center py-3">
        <NuxtLoadingIndicator />
        <SiteMenu class="w-full" />
        <ContainerSection class="flex grow">
            <SiteSidebar
                v-if="!!$route.params.slug"
                class="
                    border-r border-gray-200 dark:border-zinc-600
                    lg:w-60 xl:w-80
                    px-4
                "
            />
            <div class="flex-1 w-full px-4">
                <div class="px-4 py-20">
                    <div class="relative max-w-xl mx-auto h-14 mb-20 z-10">
                        <SiteSearch />
                    </div>
                    <NuxtPage />
                </div>
            </div>
        </ContainerSection>
        <SiteFooter class="w-full" />
    </div>
</template>

<script setup lang="ts">
import ContainerSection from './components/layout/ContainerSection.vue'

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
