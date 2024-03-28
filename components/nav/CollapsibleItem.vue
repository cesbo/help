<template>
    <div class="wrap-collabsible">
        <div class="item-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"
                :class="{ rotate: isExpanded }" v-if="treeItem.children && treeItem.children.length > 0"
                @click="isExpanded = !isExpanded">
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
            <NuxtLinkLocale :to="treeItem.url">{{ treeItem.title }}</NuxtLinkLocale>
        </div>
        <Transition name="expand">
            <div v-if="isExpanded" class="item-content">
                <CollapsibleItem v-for="childItem in treeItem.children" :treeItem="childItem" />
            </div>
        </Transition>

    </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(['treeItem'])

const isExpanded = ref(false)
</script>
<style scoped>
.wrap-collabsible .item-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.wrap-collabsible .item-content {
    padding-left: 24px;
}

.wrap-collabsible .item-title svg {
    cursor: pointer;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    transition: all 0.3s ease-in-out;
}

.wrap-collabsible .item-title svg.rotate {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}

.expand-v-enter-active,
.expand-v-leave-active {
    transition: max-height 1.4s ease;
}

.expand-v-enter-from,
.expand-v-leave-to {
    max-height: 0;
}

.expand-v-enter-to,
.expand-v-leave-from {
    max-height: 500px;
}
</style>