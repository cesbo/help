<template>
<div class="h-full flex flex-col">
    <SiteMenu />
    <div class="grow">
        <NuxtLoadingIndicator />
        <NuxtPage />
    </div>
    <SiteFooter />

    <Teleport to="body">
        <noscript>
            <img
                src="https://sa-help.cesbo.com/noscript.gif?hostname=help.cesbo.com&collect-dnt=true"
                alt=""
                referrerpolicy="no-referrer-when-downgrade"
            />
        </noscript>
    </Teleport>
</div>
</template>

<script setup lang="ts">
onMounted(() => {
    const script = document.createElement('script')
    script.setAttribute('data-collect-dnt', 'true')
    script.setAttribute('async', '')
    script.setAttribute('defer', '')
    script.setAttribute('src', 'https://sa-help.cesbo.com/latest.js')
    document.head.appendChild(script)
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
