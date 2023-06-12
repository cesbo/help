<template>
<div
    class="
        text-gray-900
        prose
        lg:prose-xl
        prose-img:rounded-2xl
        prose-h1:border-b prose-h1:border-gray-200 prose-h1:text-3xl lg:prose-h1:text-4xl prose-h1:pb-10 prose-h1:mb-10
        prose-h2:text-gray-900 prose-h2:text-2xl lg:prose-h2:text-3xl
        prose-h3:text-gray-500 prose-h3:text-xl lg:prose-h3:text-2xl
        prose-pre:leading-6
    "
>
    <ContentRenderer v-if="page" :value="page">
        <ArticleDate v-if="page.date" :date="page.date" />
        <h1>{{ page.title }}</h1>
        <div
            v-if="page.body.toc"
            class="not-prose"
        >
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
        <ContentRendererMarkdown :value="page" />
        <hr />
        <ArticleFeedback />
    </ContentRenderer>
</div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
}>()

const route = useRoute()
const page = await queryContent(route.path).findOne()

const title = `${ page.title } - ${ props.title }`

useHead({
    title,
})

// Only for SSR
if(process.server) {
    const absolutePageUrl = 'https://help.cesbo.com' + route.fullPath

    useSeoMeta({
        description: page.description,

        twitterCard: page.image ? 'summary_large_image' : 'summary',
        twitterSite: '@cesbo',
        twitterTitle: title,
        twitterDescription: page.description,
        ...( page.image ? { twitterImage: page.image } : {} ),

        ogType: 'website',
        ogUrl: absolutePageUrl,
        ogTitle: title,
        ogDescription: page.description,
        ...( page.image ? { ogImage: page.image } : {} ),
    })
}
</script>
