<template>
<div class="h-full flex flex-col">
    <SiteMenu />
    <div class="grow">
        <NuxtLoadingIndicator />
        <NuxtPage />
    </div>
    <SiteFooter />
</div>
</template>

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
