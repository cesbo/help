<template>
<footer
    class="bg-gray-100 dark:bg-zinc-900"
    aria-labelledby="footer-heading"
>
<div
    class="
        flex
        flex-col md:flex-row
        items-center
        max-w-screen-xl
        mx-auto
        pb-20
        pt-20
        px-4 xl:px-0
        gap-y-4
    "
>
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="md:grid md:grid-cols-3 md:gap-8">
            <ul
                role="list"
                class="
                    text-gray-600
                    gap-4
                    flex
                "
            >
                <li v-for="(item, index) in links" :key="index">
                    <NuxtLink
                        :to="item.to"
                        class="hover:text-gray-900"
                    >{{ item.name }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>

    <div class="flex gap-2">
        <a
            v-for="(item, index) in social"
            :key="index"
            :href="item.href"
            :title="item.title"
            target="_blank"
            class="
                rounded
                hover:bg-gray-100 dark:hover:bg-zinc-600
            "
            :class="[ item.hover ]"
        ><component :is="item.icon" class="w-6 h-6" /></a>
    </div>
</div>

<div
    class="
        flex
        gap-5
        justify-center
        border-t
        border-gray-200 dark:border-zinc-600
        py-6
        text-xs leading-5
        text-gray-600 dark:text-gray-300
    "
>
    <div
        class="
            text-gray-500
            dark:text-gray-400
        "
    >&copy; 2023, Cesbo</div>

    <NuxtLink
        to="https://cesbo.com/terms"
        class="
            hover:text-black
            dark:hover:text-white
        "
    >Terms</NuxtLink>
    <NuxtLink
        to="https://cesbo.com/privacy"
        class="
            hover:text-black
            dark:hover:text-white
        "
    >Privacy</NuxtLink>
</div>
</footer>
</template>

<script setup lang="ts">
import {
    AtSymbolIcon,
} from '@heroicons/vue/20/solid'

const links = [
    { name: 'Home', to: 'https://cesbo.com' },
    { name: 'Help', to: 'https://help.cesbo.com' },
    { name: 'Status', to: 'https://status.cesbo.com' },
    { name: 'Profile', to: 'https://cesbo.com/profile' },
]

const TwitterIcon = defineComponent({
    render: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', {
            d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
        }),
    ]),
})

const TelegramIcon = defineComponent({
    render: () => h('svg', { fill: 'currentColor', viewBox: '180 220 580 620' }, [
        h('path', {
            d: 'M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069z',
        }),
    ]),
})

const social = [
    {
        title: 'Email',
        icon: AtSymbolIcon,
        href: 'mailto:support@cesbo.com',
        hover: 'hover:text-red-500'
    },
    {
        title: 'Telegram Channel',
        icon: TelegramIcon,
        href: 'https://t.me/cesbo',
        hover: 'hover:text-sky-500',
    },
    {
        title: 'Twitter',
        icon: TwitterIcon,
        href: 'https://twitter.com/cesbo',
        hover: 'hover:text-sky-500',
    },
]
</script>
