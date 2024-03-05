<script setup>
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
    <NuxtLink v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)">
        {{ locale.name }}
    </NuxtLink>
</template>
