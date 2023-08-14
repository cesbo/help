<template>
<details
    class="
        open:ring-1 open:ring-black/5
        open:shadow-lg
        -mx-6
        p-6
        rounded-lg
        group
    "
>
    <summary
        class="
            text-normal
            leading-6
            text-brand hover:text-sky-600
            cursor-pointer
            group-open:mb-6
        "
    >{{ title }}</summary>

    <ContentSlot :use="$slots.default" unwrap="p" />
</details>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>
