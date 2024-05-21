<template>
    <header
        class="sticky top-0 z-20
            flex flex-col items-center
            border-b border-gray-200
            bg-white/50
            dark:bg-gray-800/50
            dark:border-zinc-600
            px-6
            backdrop-blur backdrop-filter">
        <ContainerSection>
            <div class="
                flex
                flex-wrap
                items-center
                mx-auto
                px-4 xl:px-0
                py-2
                gap-x-8
            ">
                <NuxtLink :to="localePath('/')" class="
                    flex
                    items-center
                    mr-auto
                " title="Cesbo Docs">
                    <div class="
                        h-[30px] w-[110px]
                        bg-contain bg-center bg-no-repeat
                    " :style="{
                    backgroundImage: 'url(https://cdn.cesbo.com/logo.svg)',
                }"></div>
                </NuxtLink>

                <div class="w-auto">
                    <ul class="flex flex-row font-medium gap-x-8">
                        <li v-for="item in navigation" :key="item.name">
                            <NuxtLink :to="item.to" class="
                                block
                                py-1
                                rounded
                                hover:text-brand
                            ">{{ $t(item.name) }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </ContainerSection>
    </header>
</template>

<script setup lang="ts">
import ContainerSection from './layout/ContainerSection.vue';
const localePath = useLocalePath()

const navigation = [
    { name: 'menu.home', to: 'https://www.cesbo.com' },
    { name: 'menu.docs', to: localePath('/') },
    { name: 'menu.support', to: 'https://support.cesbo.com' },
    { name: 'menu.pricing', to: 'https://app.cesbo.com/orders/software/astra/buy/' },
    { name: 'menu.profile', to: 'https://app.cesbo.com/accounts/login/?next=/accounts/profile/' },
]
</script>
