<template>
    <div class="wrap-collabsible text-sm">
        <div class="item-title flex justify-start items-center">
            <svg class="expansion-handle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"
                :class="{ rotate: isExpanded }" v-if="treeItem.children && treeItem.children.length > 0"
                @click="isExpanded = !isExpanded">
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
            <NuxtLinkLocale class="hover:underline hover:underline-offset-2 hover:decoration-dotted" :to="treeItem.path">{{ treeItem.title }}</NuxtLinkLocale>
        </div>
        <div class="item-content max-h-0 overflow-hidden pl-6 pt-1" :class="{ expanded: isExpanded }">
            <CollapsibleItem v-for="childItem in treeItem.children" :treeItem="childItem" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(['treeItem'])

const isExpanded = ref(false)
</script>
<style scoped>

.wrap-collabsible svg.expansion-handle {
    cursor: pointer;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    transition: all 0.3s ease-in-out;
}

.wrap-collabsible svg.expansion-handle.rotate {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}

.wrap-collabsible .item-content {
    transition: all 0.3s ease;
}

.wrap-collabsible .item-content.expanded {
    height: auto;
    max-height: 100dvh;
}
</style>