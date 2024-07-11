import type {
    SearchClient,
} from 'algoliasearch'

import {
    default as algoliasearch
} from 'algoliasearch'

import {
    addPlugin,
    addImportsDir,
    createResolver,
    defineNuxtModule,
    useLogger,
} from 'nuxt/kit'

import type { Nitro } from 'nitropack'
import { astToString } from './ast'

import type {
    AlgoliaIndexObject,
    AlgoliaConfig,
} from './types'

const name = '@cesbo/search'

async function makeIndexes(
    nitro: Nitro,
    client: SearchClient,
    indexName: string,
    options: AlgoliaConfig,
): Promise<number> {
    const totalIndexAmount = Promise.all(
        options.locales.map(locale => makeIndex(nitro, client, indexName, locale, options))
    )
    .then(indexAmounts => {
        return indexAmounts.reduce((a, b) => a + b, 0)
    });

    return totalIndexAmount;
}

async function makeIndex(
    nitro: Nitro,
    client: SearchClient,
    indexName: string,
    locale: string,
    options: AlgoliaConfig,
): Promise<number> {
    const index = client.initIndex(`${ locale }_${ indexName }`)
    const prefix = (locale === options.locales[0]) ? '' : `/${ locale }`

    const items: AlgoliaIndexObject[] = []
    const keys = await nitro.storage.getKeys(`cache:content:parsed`)
    for(const key of keys) {
        const item: any = await nitro.storage.getItem(key)
        if(!item.parsed) {
            continue
        }

        const file = item.parsed
        if(file._draft || file._empty || file.noindex || file._type !== 'markdown') {
            continue
        }

        if(file._locale !== locale) {
            continue
        }

        const path = file._path as string

        items.push({
            objectID: prefix + path,
            title: file.title,
            content: astToString(file.body),
            _tags: file.tags,
            category: options.categories?.find(item => path.startsWith(item.path))?.category,
        })
    }

    if(!items.length) {
        return 0
    }

    {
        // add changelog
        const path = '/astra/admin-guide/administration/changelog'
        items.push({
            objectID: prefix + path,
            title: 'Changelog',
            content: '',
            category: options.categories?.find(item => path.startsWith(item.path))?.category,
        })
    }

    const result = items.length

    const tmpIndex = client.initIndex(index.indexName + '_tmp')
    await client.copySettings(index.indexName, tmpIndex.indexName)
    await client.copyRules(index.indexName, tmpIndex.indexName)
    await client.copySynonyms(index.indexName, tmpIndex.indexName)

    while(items.length) {
        const { taskIDs } = await tmpIndex.saveObjects(items.splice(0, 1000))
        for(const taskID of taskIDs) {
            await tmpIndex.waitTask(taskID)
        }
    }

    await client.moveIndex(tmpIndex.indexName, index.indexName)

    return result
}

export default defineNuxtModule({
    meta: {
        name,
        configKey: 'algolia',
    },

    defaults: <AlgoliaConfig>{},

    setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)
        const runtimeDir = resolve('./runtime')
        nuxt.options.build.transpile.push(runtimeDir)

        // Register plugin
        addPlugin(resolve(runtimeDir, 'plugin'))

        // Register composables
        addImportsDir(resolve(runtimeDir, 'composables'))

        // indexing
        const logger = useLogger(name)

        const appId = process.env.NUXT_PUBLIC_ALGOLIA_APP_ID
        const indexName = process.env.NUXT_PUBLIC_ALGOLIA_INDEX_NAME
        const secretKey = process.env.ALGOLIA_SECRET_KEY

        if(!secretKey || !appId || !indexName) {
            logger.info('Skip Algolia indexing')
            return
        }

        const client = algoliasearch(appId, secretKey)

        nuxt.hooks.hook('nitro:init', async (nitro) => {
            nitro.hooks.hook('compiled', async (nitro) => {
                const num = await makeIndexes(nitro, client, indexName, options)
                logger.info(`Algolia index ready. Uploaded ${ num } items`)
            })
        })
    },
})
