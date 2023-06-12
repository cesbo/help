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
                <img
                    src="https://cdn.cesbo.com/logo.svg"
                    alt="Cesbo Logo"
                    class="h-8"
                />
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

const navigation = [
    { name: 'Home', to: 'https://cesbo.com' },
    { name: 'Help', to: '/' },
    { name: 'Profile', to: 'https://cesbo.com/profile' },
]

const openMenu = ref(false)
</script>
