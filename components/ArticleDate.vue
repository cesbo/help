<template>
<time
    class="
        text-xs
        text-gray-500
    "
    :datetime="date"
>{{ dateFormat(date) }}</time>
</template>

<script setup lang="ts">
defineProps<{
    date: string
}>()

const dateFormat = (s: string): string => {
    return (new Date(s)).toLocaleString(
        'en-CA',
        {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }
    )
}
</script>
