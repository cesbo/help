/**
 * This file is a current workaround to dynamically connect i18n and Content modules.
 * If we find a better way - we will use it.
 * */
import en from './en/translations.json'
import ru from './ru/translations.json'
import es from './es/translations.json'

export const localesWeUse = {
    en, ru, es
}

export const localeNames = Object.keys(localesWeUse)