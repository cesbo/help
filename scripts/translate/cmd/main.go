package main

import (
	"cesbo-help/translate/internal/translator"
	"fmt"
)

func main() {
	source := "Hello, World!"
	t := translator.NewTranslator()
	translated, err := translator.Translate(t, source, translator.LANG_RU)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Printf("%s -> %s\n", source, translated)
}
