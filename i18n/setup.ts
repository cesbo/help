/**
 * This file is a current workaround to dynamically connect i18n and Content modules.
 * If we find a better way - we will use it.
 * */
import en from './locales/en.json'
import ru from './locales/ru.json'
import es from './locales/es.json'

export const localesLayout = [{
    code: 'en',
    iso: 'en-US',
    name: 'English'
},
{
    code: 'ru',
    iso: 'ru-RU',
    name: 'Русский'
},
{
    code: 'es',
    iso: 'es-ES',
    name: 'Español'
}]

export const defaultLocale = "en"
export const localesWeUse = { en, ru, es }
export const localeNames = Object.keys(localesWeUse)