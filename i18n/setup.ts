/**
 * This file is a current workaround to dynamically connect i18n and Content modules.
 * If we find a better way - we will use it.
 * */
import en from './locales/en.json'
import ru from './locales/ru.json'
import es from './locales/es.json'

export const localesLayout = [{
    code: 'en',
    name: 'English'
},
{
    code: 'ru',
    name: 'Русский'
},
{
    code: 'es',
    name: 'Español'
}]

export const defaultLocale = "en"
export const localesWeUse = { en, ru, es }
export const localeNames = Object.keys(localesWeUse)