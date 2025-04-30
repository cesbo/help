const LIBRE_TRANSLATE_URL = 'http://103.249.134.120:10000'

export async function translateTo(text, language) {
    const res = await fetch(`${LIBRE_TRANSLATE_URL}/translate`, {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: "en",
            target: language,
            format: "text",
            alternatives: 1
        }),
        headers: { "Content-Type": "application/json" }
    })
    return (await res.json()).translatedText
}