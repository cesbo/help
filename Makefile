MAKEFLAGS = -rR --no-print-directory

.PHONY: all

all:
	@echo "Init node modules"
	@npm install
	@mkdir -p public
	@echo "Build static site"
	@hugo -d public
	@echo "Deploy search index"
	@node scripts/algolia-deploy.mjs
	@echo "Build js app"
	@npm run build
