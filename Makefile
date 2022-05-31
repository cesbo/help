MAKEFLAGS = -rR --no-print-directory

.PHONY: all en-astra en-utils

all: en-astra en-utils

en-astra:
	@echo "Astra"
	@mkdocs build -c -f en-astra.yml

en-utils:
	@echo "Utils"
	@mkdocs build -c -f en-utils.yml
