<template>
    <div class="text-sm">
        <div
            class="font-semibold pt-4 pb-2"
        >{{ treeItem.title }}</div>

        <div
            v-for="group in treeItem.children"
            :key="group.path"
            class="pt-2"
        >
            <div class="pb-2">{{ group.title }}</div>

            <NuxtLinkLocale
                v-for="item in group.children"
                :key="item.path"
                class="
                    flex items-stretch gap-x-2 gap-y-0
                    hover:underline hover:underline-offset-2 hover:decoration-dotted
                "
                :to="item.path"
                v-slot="{ isExactActive }"
            >
                <div
                    class="border-[1px]"
                    :class="[
                        isExactActive ? 'border-brand' : 'border-gray-200'
                    ]"
                />
                <div class="leading-6">{{ item.title }}</div>
            </NuxtLinkLocale>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    ChevronRightIcon,
    HomeIcon,
} from '@heroicons/vue/20/solid'

defineProps(['treeItem'])
const isExpanded = ref(false)
</script>
