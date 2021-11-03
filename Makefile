MAKEFLAGS = -rR --no-print-directory

.PHONY: all

all:
	@mkdir -p public
	@echo "Build static site"
	@hugo -d public
	@echo "Build lunr index"
	@node build-index.js
