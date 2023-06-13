<template>
<div class="mx-auto max-w-3xl text-gray-900">
    <ContentRenderer :value="page">
        <ArticleDate v-if="page.date" :date="page.date" />

        <h1
            class="
                text-3xl
                lg:text-4xl
                pb-5
                mb-5
                font-bold
            "
        >{{ page.title }}</h1>

        <div v-if="page.body.toc?.links">
            <ul role="list" class="text-base leading-6 pb-6">
                <li
                    v-for="item in page.body.toc.links"
                    :key="item.id"
                >
                    <NuxtLink
                        :to="`#${ item.id }`"
                        :class="{
                            'pl-0': item.depth == 2,
                            'pl-6': item.depth == 3,
                        }"
                        class="
                            text-sky-500
                            underline
                            cursor-pointer
                        "
                    >{{ item.text }}</NuxtLink>
                </li>
            </ul>
        </div>

        <div
            class="
                prose
                lg:prose-xl
                prose-img:rounded-2xl
                prose-h2:text-gray-900 prose-h2:text-2xl lg:prose-h2:text-3xl
                prose-h3:text-gray-500 prose-h3:text-xl lg:prose-h3:text-2xl
                prose-pre:leading-6
            "
        >
            <ContentRendererMarkdown :value="page" />
        </div>

        <div class="pt-20">
            <ArticleFeedback />
        </div>
    </ContentRenderer>
</div>
</template>

<script setup lang="ts">
const route = useRoute()
const page = await queryContent(route.path).findOne()

const title = (() => {
    switch(route.path.split('/', 2)[1]) {
        case 'astra':
            return `${ page.title } - Cesbo Astra`
        case 'alta':
            return `${ page.title } - Cesbo Alta`
        case 'misc':
            return `${ page.title } - Cesbo Docs`
        default:
            return `${ page.title } - Cesbo`
    }
})()

useHead({
    title,
})

// Only for SSR
if(process.server) {
    const absolutePageUrl = 'https://help.cesbo.com' + route.fullPath
    const description = page.description || page.navigation.description

    useSeoMeta({
        description,

        twitterCard: page.image ? 'summary_large_image' : 'summary',
        twitterSite: '@cesbo',
        twitterTitle: title,
        twitterDescription: page.description,
        twitterImage: page.image,

        ogType: 'website',
        ogUrl: absolutePageUrl,
        ogTitle: title,
        ogDescription: page.description,
        ogImage: page.image,
    })
}
</script>
