<template>
<header class="sticky top-0 z-20">
    <nav
        class="
            bg-white/50
            dark:bg-gray-800/50
            border-b border-gray-200 dark:border-zinc-600
            backdrop-blur backdrop-filter
        "
    >
        <div
            class="
                relative
                max-w-screen-xl
                flex flex-wrap
                items-center
                mx-auto
                px-4 xl:px-0
                py-2
                gap-x-8
            "
        >
            <NuxtLink
                to="https://cesbo.com"
                class="
                    flex
                    items-center
                    text-sky-500
                    mr-auto
                "
            >
                <CesboLogo alt="Cesbo Logo" class="h-8" />
            </NuxtLink>

            <div class="w-auto hidden md:block" id="navbar-default">
                <ul class="flex flex-row font-medium gap-x-8">
                    <li v-for="item in navigation" :key="item.name">
                        <NuxtLink
                            :to="item.to"
                            class="
                                block
                                py-1
                                rounded
                                hover:text-sky-400
                            "
                        >{{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </div>

            <button
                class="
                    md:hidden
                    py-1
                    hover:text-sky-400
                "
            >
                <Bars3Icon class="h-6 w-6" @click="openMenu = true" />
            </button>
            <TransitionRoot as="template" :show="openMenu">
                <Dialog as="div" class="md:hidden relative z-10" @close="openMenu = false">
                    <TransitionChild
                        as="template"
                        enter="ease-in-out duration-500"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="ease-in-out duration-500"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div class="fixed inset-0 overflow-hidden">
                        <div class="absolute inset-0 overflow-hidden">
                            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <TransitionChild
                                    as="template"
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enter-from="translate-x-full"
                                    enter-to="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leave-from="translate-x-0"
                                    leave-to="translate-x-full"
                                >
                                    <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                        <div
                                            class="
                                                h-full
                                                flex
                                                flex-col
                                                overflow-y-scroll
                                                bg-white
                                                py-6
                                                shadow-xl
                                            "
                                        >
                                            <div class="px-4 sm:px-6">
                                                <div class="flex items-start justify-between">
                                                <DialogTitle
                                                    class="
                                                        text-base
                                                        font-semibold
                                                        leading-6
                                                    "
                                                ><!-- title --></DialogTitle>
                                                <div class="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        class="
                                                            rounded-md
                                                            bg-white
                                                            text-gray-400
                                                            hover:text-gray-500
                                                        "
                                                        @click="openMenu = false"
                                                    >
                                                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                                <nav class="flex flex-1 flex-col">
                                                    <ul role="list" class="-mx-2 space-y-1">
                                                        <li v-for="item in navigation" :key="item.name">
                                                            <NuxtLink
                                                                :to="item.to"
                                                                class="
                                                                    text-gray-700
                                                                    hover:text-sky-400
                                                                    group
                                                                    flex gap-x-3
                                                                    rounded
                                                                    p-2 pl-3
                                                                    leading-6
                                                                    font-semibold
                                                                "
                                                                @click="openMenu = false"
                                                            >{{ item.name }}</NuxtLink>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </div>
    </nav>
</header>
</template>

<script setup lang="ts">
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'

import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/vue/20/solid'

const CesboLogo = defineComponent({
    render: () => h('svg', { viewBox: '0 0 616 168' }, [
        h('path', {
            'fill-rule': 'evenodd',
            fill: 'currentColor',
            d: 'M398 15H372V69V72V99C372 121.091 389.909 139 412 139H452C474.091 139 492 121.091 492 99V69C492 46.9086 474.091 29 452 29H412C407.075 29 402.357 29.8902 398 31.5184V15ZM398 75C398 63.9543 406.954 55 418 55H446C457.046 55 466 63.9543 466 75V93C466 104.046 457.046 113 446 113H418C406.954 113 398 104.046 398 93V75ZM536 29C513.909 29 496 46.9086 496 69V99C496 121.091 513.909 139 536 139H576C598.091 139 616 121.091 616 99V69C616 46.9086 598.091 29 576 29H536ZM542 55C530.954 55 522 63.9543 522 75V93C522 104.046 530.954 113 542 113H570C581.046 113 590 104.046 590 93V75C590 63.9543 581.046 55 570 55H542ZM288 29C265.909 29 248 46.9086 248 69V72C248 85.2548 258.745 96 272 96H341.776C340.329 105.623 332.026 113 322 113H294C289.497 113 285.341 111.512 281.998 109H249.26C253.701 126.252 269.362 139 288 139H328C350.091 139 368 121.091 368 99V96C368 82.7452 357.255 72 344 72H274.224C275.671 62.3775 283.974 55 294 55H322C326.503 55 330.659 56.4884 334.002 59H366.74C362.299 41.7477 346.638 29 328 29H288ZM164 29C141.909 29 124 46.9086 124 69V72V96V99C124 121.091 141.909 139 164 139H204C222.638 139 238.299 126.252 242.74 109H210.002C206.659 111.512 202.503 113 198 113H170C159.974 113 151.671 105.623 150.223 96H220C233.255 96 244 85.2548 244 72V69C244 46.9086 226.091 29 204 29H164ZM217.776 72C216.329 62.3775 208.026 55 198 55H170C159.974 55 151.671 62.3775 150.223 72H217.776ZM40 29C17.9086 29 0 46.9086 0 69V99C0 121.091 17.9086 139 40 139H80C98.6384 139 114.299 126.252 118.74 109H86.0019C82.659 111.512 78.5033 113 74 113H46C34.9543 113 26 104.046 26 93V75C26 63.9543 34.9543 55 46 55H74C78.5033 55 82.659 56.4884 86.0019 59H118.74C114.299 41.7477 98.6384 29 80 29H40Z',
        }),
    ]),
})

const navigation = [
    { name: 'Home', to: 'https://cesbo.com' },
    { name: 'Help', to: 'https://help.cesbo.com' },
    { name: 'Profile', to: 'https://cesbo.com/profile' },
]

const openMenu = ref(false)
</script>
