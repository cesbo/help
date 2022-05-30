MAKEFLAGS = -rR --no-print-directory

.PHONY: all en-astra en-linux

all: en-astra en-linux

en-astra:
	@echo "Astra"
	@mkdocs build -c -f en-astra.yml

en-linux:
	@echo "Linux"
	@mkdocs build -c -f en-linux.yml
