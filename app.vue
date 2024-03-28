<template>
    <div id="app" class="w-full h-full flex flex-col items-center px-6 py-3">
        <SiteMenu class="w-full" />
        <div class="max-w-screen-2xl flex">
            <Sidebar class="flex-none w-60"/>
            <div class="flex-1 w-full">
                <NuxtLoadingIndicator />
                <div class="px-4 py-20">
                    <div class="mx-auto h-14 mb-20">
                        <div class="
                        z-10">
                            <SiteSearch />
                        </div>
                    </div>
                    <NuxtPage />
                </div>
            </div>
        </div>
        <SiteFooter class="w-full" />
    </div>
</template>

<script setup lang="ts">
import Sidebar from './components/nav/Sidebar.vue';

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
