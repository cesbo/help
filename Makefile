MAKEFLAGS = -rR --no-print-directory

.PHONY: all hugo

all: hugo

hugo:
	@echo "Hugo"
	@hugo -d public
