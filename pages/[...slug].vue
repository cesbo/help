<template>
<div class="mx-auto max-w-3xl text-gray-900">
    <ContentRenderer :value="page">
        <ArticleBreadcrumb v-if="page._path" :path="page._path" class="mb-5" />

        <h1
            class="
                text-3xl
                lg:text-4xl
                font-bold
            "
        >{{ page.title }}</h1>
        <!-- <ArticleDate v-if="page.date" :date="page.date" /> -->

        <ArticleToc
            v-if="page.body.toc?.links"
            :items="page.body.toc.links"
            class="mt-5"
        />

        <div
            class="
                mt-10
                prose
                lg:prose-xl
                prose-img:rounded-2xl
                prose-h2:text-gray-900 prose-h2:text-2xl lg:prose-h2:text-3xl
                prose-h3:text-gray-500 prose-h3:text-xl lg:prose-h3:text-2xl
                prose-pre:leading-6
                prose-a:text-sky-500
                hover:prose-a:text-sky-600
                prose-a:font-normal
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
    const description = page.description || page.navigation?.description

    if(page.noindex) {
        useHead({
            meta: [
                {
                    name: 'robots',
                    content: 'noindex',
                }
            ],
        })
    }

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
