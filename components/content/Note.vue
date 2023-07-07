<template>
<div
    class="
        ring-2 ring-inset ring-brand
        pl-12 pr-2 py-3
        rounded
        relative
        overflow-hidden
        shadow-sm
    "
>
    <DocumentIcon
        class="absolute left-3 top-[18px] w-6 h-6 text-brand"
    />

    <ContentSlot :use="$slots.default" unwrap="p" />
</div>
</template>

<script setup lang="ts">
import {
    DocumentIcon,
} from '@heroicons/vue/24/solid'
</script>
