import en from './en/translations.json'
import ru from './ru/translations.json'
import es from './es/translations.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        ru,
        es
    }
}))