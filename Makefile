MAKEFLAGS = -rR --no-print-directory

.PHONY: all prepare en-alta en-astra en-codex

all: prepare en-alta en-astra en-codex cloudflare-deploy

prepare:
	@echo "Install plugins"
	@python3 -m pip install -e src/contexty

cloudflare-deploy:
	@echo "Preparing configs for Cloudflare Pages"
	@cp static/_headers site/
	@cp static/_redirects site/
	@cp static/robots.txt site/
	@cp static/404.html site/

en-alta:
	@echo "Alta"
	@mkdocs build -f en-alta.yml

en-astra:
	@echo "Astra"
	@mkdocs build -f en-astra.yml

en-codex:
	@echo "Codex"
	@mkdocs build -f en-codex.yml
