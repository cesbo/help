<template>
<span
    class="
        inline-flex
        items-center
        rounded-full
        px-2 py-1
        text-xs
        lg:text-sm
        font-medium
        ring-1 ring-inset
    "
    :class="[
        type === 'error' ?
            'bg-red-50 text-red-700 ring-red-600/10' :
        type === 'warning' ?
            'bg-yellow-50 text-yellow-800 ring-yellow-600/20' :
        'bg-blue-50 text-blue-700 ring-blue-700/10'
    ]"
>
    <ContentSlot :use="$slots.default" unwrap="p" />
</span>
</template>

<script setup lang="ts">
defineProps<{
    type?: 'info' | 'warning' | 'error'
}>()
</script>
