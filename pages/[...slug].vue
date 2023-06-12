<template>
<div class="bg-white px-4 py-20">
    <div class="relative mx-auto max-w-xl h-14 mb-20">
        <div
            class="
                absolute
                w-full
                z-10
                bg-white
            "
        >
            <CommandPallete />
        </div>
    </div>

    <div class="mx-auto max-w-3xl">
        <HelpCategory v-if="isCategory" :title="title" />
        <ArticleContent v-else :title="title" />
    </div>
</div>
</template>

<script setup lang="ts">
const route = useRoute()

const [ title, isCategory ] = ((path: string): [ string, boolean ] => {
    const prefixes = [
        { prefix: '/astra/getting-started', title: 'Cesbo Astra' },
        { prefix: '/astra/admin-guide', title: 'Cesbo Astra' },
        { prefix: '/astra/receiving', title: 'Cesbo Astra' },
        { prefix: '/astra/processing', title: 'Cesbo Astra' },
        { prefix: '/astra/monitoring', title: 'Cesbo Astra' },
        { prefix: '/astra/delivery', title: 'Cesbo Astra' },

        { prefix: '/alta/getting-started', title: 'Cesbo Alta' },
        { prefix: '/alta/admin-guide', title: 'Cesbo Alta' },
        { prefix: '/alta/ott-settings', title: 'Cesbo Alta' },

        { prefix: '/misc/tools-and-utilities', title: 'Cesbo Docs' },
        { prefix: '/misc/terms-and-conditions', title: 'Cesbo Docs' },
        { prefix: '/misc/troubleshooting', title: 'Cesbo Docs' },
    ]

    for(const item of prefixes) {
        if(path.startsWith(item.prefix)) {
            return [
                item.title,
                path.length === item.prefix.length,
            ]
        }
    }

    return [ 'Cesbo', false ]
})(route.path)
</script>
