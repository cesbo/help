import { defaultLocale, localesWeUse } from './setup'

export default defineI18nConfig(() => ({
    legacy: false,
    fallbackLocale: defaultLocale,
    messages: localesWeUse
}))
