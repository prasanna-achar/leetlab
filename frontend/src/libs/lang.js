const languageAndIds = {
    "JAVASCRIPT": 63,
    "JAVA": 62,
    "PYTHON": 71
}

export const getLanguageId = (lang) => (languageAndIds[lang.toUpperCase()])