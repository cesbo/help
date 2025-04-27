package translator

import (
	tr "github.com/snakesel/libretranslate"
)

const (
	API_URL     = "http://103.249.134.120:10000/"
	SOURCE_LANG = "en"
	LANG_RU     = "ru"
	LANG_ES     = "es"
)

func NewTranslator() *tr.Translation {
	return tr.New(tr.Config{
		Url: API_URL,
	})
}

func Translate(t *tr.Translation, text string, targetLang string) (string, error) {
	return t.Translate(text, SOURCE_LANG, targetLang)
}
