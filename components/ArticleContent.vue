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

const { data: page } = await useAsyncData(
    'site-content',
    async (ctx) => {
        const page = await queryContent(route.path).findOne()

        useHead({
            title: `${ page.title } - ${ props.title }`,
        })

        // Only for SSR
        if(process.server && !process.dev) {
            let absolutePageUrl: string | undefined
            let absoluteImageUrl: string | undefined

            const req = ctx?.ssrContext?.event.node.req
            if(req && req.headers.host) {
                const proto =
                    (req.headers['x-forwarded-proto'] as string) ||
                    ('encryped' in req.socket ? 'https' : 'http')
                const host = req.headers['x-forwarded-host'] || req.headers.host
                const origin = proto + '://' + host

                absolutePageUrl = origin + route.fullPath

                if(page.image) {
                    absoluteImageUrl = origin + page.image
                }
            }

            useSeoMeta({
                description: page.description,

                twitterCard: 'summary_large_image',
                twitterSite: '@cesbo',
                twitterTitle: page.title,
                twitterDescription: page.description,
                twitterImage: absoluteImageUrl,

                ogType: 'website',
                ogTitle: page.title,
                ogDescription: page.description,
                ogImage: absoluteImageUrl,
                ogUrl: absolutePageUrl,
            })
        }

        return page
    }
)

if(!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found',
    })
}
</script>
