/**
 * This file is a current workaround to dynamically connect i18n and Content modules.
 * If we find a better way - we will use it.
 * */
import en from './locales/en.json'
import ru from './locales/ru.json'
import es from './locales/es.json'

export const localesLayout = [{
    code: 'en',
    name: 'English',
    iso: 'en-US',
},
{
    code: 'ru',
    name: 'Русский',
    iso: 'ru-RU',
},
{
    code: 'es',
    name: 'Español',
    iso: 'es-ES',
}]

export const defaultLocale = 'en'
export const localesWeUse = { en, ru, es }
export const localeNames = Object.keys(localesWeUse)
