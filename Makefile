MAKEFLAGS = -rR --no-print-directory

.PHONY: all en-alta en-astra en-utils

all: en-alta en-astra en-utils

en-alta:
	@echo "Alta"
	@mkdocs build -c -f en-alta.yml

en-astra:
	@echo "Astra"
	@mkdocs build -c -f en-astra.yml

en-utils:
	@echo "Utils"
	@mkdocs build -c -f en-utils.yml

en-book:
	@echo "Book"
	@mkdocs build -c -f en-book.yml
