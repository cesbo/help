<template>
<h2 :id="id" class="group flex items-center gap-x-2">
    <slot />

    <a
        v-if="id"
        :href="`#${id}`"
        aria-hidden="true"
        @click.prevent="copyLink()"
        class="
            flex
            invisible
            group-hover:visible
            items-center
            no-underline
            group/link
            bg-white
            relative
        "
    >
        <Transition
            enter-active-class="transition ease-in duration-100"
            leave-active-class="transition ease-out duration-100"
            enter-from-class="opacity-0 translate-x-2"
            leave-to-class="opacity-0 translate-x-2"
        >
            <div
                v-if="copied"
                class="
                    absolute right-full
                    text-sm
                    font-normal
                    leading-6
                    px-2
                    border border-sky-400
                    bg-sky-50
                    text-sky-900
                    rounded-full
                    mr-2
                    hidden
                    group-hover/link:block
                "
            >Copied!</div>
        </Transition>

        <PaperClipIcon
            class="
                w-7
                h-7
                text-sky-400
            "
        />
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
