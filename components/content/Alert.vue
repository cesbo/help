<template>
<div
    class="
        ring-2 ring-inset ring-red-500
        pl-12 pr-2 py-3
        rounded
        relative
        overflow-hidden
        shadow-sm
    "
>
    <ExclamationTriangleIcon
        class="absolute left-3 top-[18px] w-6 h-6 text-red-500"
    />

    <ContentSlot :use="$slots.default" unwrap="p" />
</div>
</template>

<script setup lang="ts">
import {
    ExclamationTriangleIcon,
} from '@heroicons/vue/24/solid'
</script>
