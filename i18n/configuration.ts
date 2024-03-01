import { defaultLocale, localesWeUse } from "./setup";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: defaultLocale,
    messages: localesWeUse
}))