import { defaultLocale, localeNames, localesLayout } from "./i18n/setup";

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@nuxt/content',
        '@nuxt/image',
    ],

    i18n: {
        detectBrowserLanguage: {
            useCookie: true,
            redirectOn: 'root'
        },
        locales: localesLayout,
        defaultLocale: defaultLocale,
        vueI18n: './i18n/configuration.ts'
    },

    content: {
        locales: localeNames,
        defaultLocale: defaultLocale
    },

    nitro: {
        prerender: {
            routes: [
                '/sitemap.xml',
            ],
        }
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: 'https://cdn.cesbo.com/favicon.png',
                },
            ],
        },
    },

    runtimeConfig: {
        logsnag: {
            project: '',
            token: '',
        },

        public: {
            algolia: {
                appId: '',
                indexName: '',
                siteKey: '',
            },
        },
    },

    routeRules: {
        '/**': { prerender: true },
    },

    algolia: {
        // categories for indexing
        // set ALGOLIA_SECRET_KEY to environment variables before build
        categories: [
            { path: '/astra/getting-started/first-steps', category: 'Astra > Getting Started > First Steps' },
            { path: '/astra/getting-started/use-cases', category: 'Astra > Getting Started > Use Cases' },
            { path: '/astra/getting-started/advanced', category: 'Astra > Getting Started > Advanced' },

            { path: '/astra/admin-guide/administration', category: 'Astra > Admin Guide > Administration' },
            { path: '/astra/admin-guide/stream', category: 'Astra > Admin Guide > Stream Settings' },
            { path: '/astra/admin-guide/settings', category: 'Astra > Admin Guide > Settings' },
            { path: '/astra/admin-guide/log', category: 'Astra > Admin Guide > Astra Logs' },
            { path: '/astra/admin-guide/api', category: 'Astra > Admin Guide > API' },

            { path: '/astra/receiving/dvb', category: 'Astra > Receiving > DVB, ATSC, ISDB-T' },
            { path: '/astra/receiving/ip', category: 'Astra > Receiving > IP Sources' },

            { path: '/astra/processing/utilities', category: 'Astra > Processing > Utilities' },
            { path: '/astra/processing/cas', category: 'Astra > Processing > CAS' },

            { path: '/astra/monitoring/export', category: 'Astra > Monitoring > Export' },

            { path: '/astra/delivery/broadcasting', category: 'Astra > Delivery > Broadcasting' },
            { path: '/astra/delivery/cas', category: 'Astra > Delivery > Broadcasting Access Control' },
            { path: '/astra/delivery/hardware', category: 'Astra > Delivery > Broadcasting Hardware' },
            { path: '/astra/delivery/http-hls', category: 'Astra > Delivery > HTTP/HLS' },
            { path: '/astra/delivery/http-hls-auth', category: 'Astra > Delivery > Authentication for HTTP/HLS' },

            { path: '/alta/getting-started', category: 'Alta > Getting Started' },
            { path: '/alta/admin-guide', category: 'Alta > Admin Guide' },
            { path: '/alta/ott-settings', category: 'Alta > OTT Settings' },

            { path: '/misc/tools-and-utilities/tv-and-media', category: 'Tools & Utilities > TV & Media' },
            { path: '/misc/tools-and-utilities/network', category: 'Tools & Utilities > Network' },
            { path: '/misc/tools-and-utilities/dvb', category: 'Tools & Utilities > DVB' },

            { path: '/misc/articles/terms-and-conditions', category: 'Articles > Terms & Conditions' },
            { path: '/misc/articles/protocols', category: 'Articles > Protocols & Standards' },
            { path: '/misc/articles/format', category: 'Articles > Format' },
            { path: '/misc/articles/hardware', category: 'Articles > Hardware' },

            { path: '/misc/troubleshooting/receiving', category: 'Troubleshooting > Receiving' },
            { path: '/misc/troubleshooting/dvb', category: 'Troubleshooting > DVB' },
        ],
    },
})
