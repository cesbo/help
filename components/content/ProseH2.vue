<template>
<h2 :id="id" class="group flex items-center gap-x-2">
    <slot />

    <a
        v-if="id"
        :href="`#${id}`"
        aria-hidden="true"
        @click.prevent="copyLink()"
        class="
            hidden
            group-hover:flex
            items-center
            no-underline
            group/link
            bg-white
        "
    >
        <PaperClipIcon
            class="
                w-7
                h-7
                text-sky-400
            "
        />

        <Transition
            enter-active-class="transition ease-in duration-100"
            leave-active-class="transition ease-out duration-100"
            enter-from-class="opacity-0 -translate-x-2"
            leave-to-class="opacity-0 -translate-x-2"
        >
            <div
                v-if="copied"
                class="
                    text-sm
                    font-normal
                    leading-6
                    px-2
                    border border-sky-400
                    bg-sky-50
                    text-sky-900
                    rounded
                    relative
                    ml-2
                    hidden
                    group-hover/link:block
                "
            >
                <div class="absolute w-2 overflow-hidden inline-block -left-2 top-1.5">
                    <div class="h-4 bg-sky-400 -rotate-45 transform origin-top-right"></div>
                </div>
                <span>Link copied to clipboard</span>
            </div>
        </Transition>
    </a>
</h2>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

import {
    PaperClipIcon,
} from '@heroicons/vue/20/solid'

const props = defineProps<{
    id?: string,
}>()

const { copy, copied } = useClipboard()

function copyLink() {
    const link = new URL(location.href)
    link.hash = props.id || ''
    copy(link.href)
}
</script>
