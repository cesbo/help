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
                to="/"
                class="
                    flex
                    items-center
                    mr-auto
                "
                title="Cesbo Help Center"
            >
                <div
                    class="
                        h-[30px] w-[110px]
                        bg-contain bg-center bg-no-repeat
                    "
                    :style="{
                        backgroundImage: 'url(https://cdn.cesbo.com/logo.svg)',
                    }"
                ></div>
            </NuxtLink>

            <div class="w-auto">
                <ul class="flex flex-row font-medium gap-x-8">
                    <li v-for="item in navigation" :key="item.name">
                        <NuxtLink
                            :to="item.to"
                            class="
                                block
                                py-1
                                rounded
                                hover:text-brand
                            "
                        >{{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script setup lang="ts">
const navigation = [
    { name: 'Home', to: 'https://www.cesbo.com' },
    { name: 'Help', to: '/' },
    { name: 'Profile', to: 'https://cesbo.com/accounts/profile/' },
]
</script>
