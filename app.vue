<template>
<div class="h-full flex flex-col" id="app">
    <SiteMenu />
    <div class="grow">
        <NuxtLoadingIndicator />

        <div class="px-4 py-20">
            <div class="relative mx-auto max-w-xl h-14 mb-20">
                <div
                    class="
                        absolute
                        w-full
                        z-10
                    "
                >
                    <SiteSearch />
                </div>
            </div>

            <NuxtPage />
        </div>
    </div>
    <SiteFooter />
</div>
</template>

<script setup lang="ts">
declare const Weglot: any;

useHead({
    script: [
        {
            src: 'https://cdn.weglot.com/weglot.min.js',
        },
        {
            src: 'https://sa-help.cesbo.com/latest.js',
            async: true,
            defer: true,
            'data-collect-dnt': true,
        },
    ],
})

onMounted(() => {
    Weglot?.initialize({
        api_key: 'wg_63cf25295c4412583437ccb39e512a9d7'
    })
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
