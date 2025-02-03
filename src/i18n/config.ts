import spanishTranslations from "./es.json"
import englishTranslations from "./en.json"

const Languages = {
    SPANISH: 'es',
    ENGLISH: 'en'
}

export const getI18n = (currentLocale : string | undefined) => {

    if(currentLocale === Languages.SPANISH) return spanishTranslations
    if(currentLocale === Languages.ENGLISH) return englishTranslations

    return spanishTranslations
}