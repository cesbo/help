<template>
<ul role="list" class="text-base leading-6">
    <li
        v-for="item in items"
        :key="item.id"
    >
        <NuxtLink
            :to="`#${ item.id }`"
            class="
                text-sky-500
                hover:text-sky-600
                underline
            "
        >{{ item.text }}</NuxtLink>

        <ArticleToc
            v-if="item.children"
            :items="item.children"
            class="pl-6"
        />
    </li>
</ul>
</template>

<script setup lang="ts">
defineProps<{
    items: any[]
}>()
</script>
