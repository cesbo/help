<template>
<main class="relative isolate min-h-full">
    <div class="container mx-auto px-4 xl:px-0 py-10">
        <div v-if="!error">
            <h1
                class="
                    text-4xl sm:text-6xl
                    font-bold
                    tracking-tight
                    text-zinc-800 dark:text-zinc-200
                "
            >Something went wrong</h1>
        </div>
        <div v-else-if="error.statusCode == 404" class="text-center space-y-6">
            <img
                src="https://cdn.cesbo.com/assets/img/not-found.svg"
                loading="lazy"
                width="400"
                height="400"
                alt="404 Error. Page not found"
                class="mx-auto"
            />
            <h1
                class="
                    text-4xl sm:text-6xl
                    font-bold
                    tracking-tight
                    text-zinc-800 dark:text-zinc-200
                "
            >Page not found</h1>
            <p>Sorry, we couldn't find the page you're looking for.</p>
        </div>
        <div v-else>
            <div>{{ error.message }}</div>
            <div v-html="error.stack" class="mt-4" />
        </div>

        <div class="mt-10 flex justify-center">
            <NuxtLink
                href="/"
                class="text-sm font-semibold leading-7"
            ><span aria-hidden="true">&larr;</span> Back to home</NuxtLink>
        </div>
    </div>
</main>
</template>

<script setup lang="ts">
defineProps({
    error: Object
})
</script>
