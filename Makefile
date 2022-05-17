MAKEFLAGS = -rR --no-print-directory

.PHONY: all en-astra

all: en-astra

en-astra:
	@echo "Astra"
	@mkdocs build -c -f en-astra.yml
