import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
    const docs = await serverQueryContent(event)
        .where({
            _partial: false,
            noindex: {
                $ne: true,
            },
        })
        .find()

    const sitemap = new SitemapStream({
        hostname: 'https://help.cesbo.com'
    })

    sitemap.write({
        url: 'https://help.cesbo.com',
        changefreq: 'monthly'
    })

    for(const doc of docs) {
        sitemap.write({
            url: doc._path,
            changefreq: 'monthly'
        })
    }

    sitemap.end()

    event.node.res.setHeader('content-type', 'text/xml')

    return streamToPromise(sitemap)
})
