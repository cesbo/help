<template>
<div class="relative h-0 pt-[25px] pb-[56.25%]">
    <iframe
        type="text/html"
        width="560"
        height="349"
        class="absolute top-0 left-0 w-full h-full"
        :src="`https://www.youtube.com/embed/${ id }`"
        loading="lazy"
        frameborder="0"
        allow="fullscreen"
    ></iframe>
</div>
</template>

<script setup lang="ts">
defineProps<{
    id: string
}>()
</script>
