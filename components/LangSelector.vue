<script setup>
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
    <SwitchLocalePathLink  v-for="l in locales" :key="l.code" :locale="l.code">
        {{ l.name }}
    </SwitchLocalePathLink >
</template>
