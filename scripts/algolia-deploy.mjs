import algoliasearch from 'algoliasearch'
import { readFileSync } from 'fs'

if(!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_API_KEY) {
    console.error('ALGOLIA_APP_ID/ALGOLIA_API_KEY not defined')
    process.exit(1)
}

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY)

function deployIndex(lang) {
    const index = client.initIndex(`dev_CESBO_${lang}`)
    const data = JSON.parse(readFileSync(`public/${lang}/index.json`))

    index
        .saveObjects(data)
        .then(() => {
            console.log('saveObjects() done')
        })
        .catch((err) => {
            console.error(err)
        })

    const indexLanguages = ['en']
    if(lang != indexLanguages[0]) {
        indexLanguages.unshift(lang)
    }

    index
        .setSettings({
            searchableAttributes: ['title', 'content'],
            ranking: ['asc(weight)'],
            indexLanguages,
        })
        .then(() => {
            console.log('setSettings() done')
        })
        .catch((err) => {
            console.error(err)
        })
}

deployIndex('en')
