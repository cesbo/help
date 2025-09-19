# Cesbo Help Documentation Project

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Dependencies
- Node.js v20+ is required (current: v20.19.5)
- `npm install` -- takes ~50 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- Dependencies are installed automatically via `postinstall` hook that runs `nuxt prepare`

### Build Commands
- `npm run dev` -- development server on http://localhost:3000. Starts in ~10-15 seconds.
- `npm run build` -- production build. Takes ~31 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- `npm run generate` -- static site generation. Takes ~50 seconds, prerenders 2500+ routes. NEVER CANCEL. Set timeout to 180+ seconds.
- `npm run preview` -- preview generated static site on http://localhost:3000

### No Tests or Linting
- This repository has NO test framework configured
- This repository has NO linting or formatting tools (ESLint, Prettier, etc.)
- Do NOT attempt to run `npm test`, `npm run lint`, or `npm run format` - these commands do not exist

## Validation

### Required Manual Testing Scenarios
ALWAYS test these complete user scenarios after making changes:

1. **Homepage Navigation**: Start dev server, navigate to http://localhost:3000, verify all category cards (Astra, Alta, Misc) display correctly
2. **Content Navigation**: Click "Getting Started" under Astra → verify sidebar navigation appears → click "Features" → verify content loads with table of contents
3. **Breadcrumb Navigation**: Verify breadcrumb trail works (Home → Getting Started → First Steps → Features)
4. **Multi-language Support**: Test that content exists in /content/en, /content/es, /content/ru directories
5. **Static Generation**: Run `npm run generate` and verify 2500+ routes are prerendered successfully

### Build Validation Commands
Always run these commands to validate your changes:
```bash
# Install dependencies (required first time)
npm install

# Test development server
npm run dev
# Visit http://localhost:3000 and test navigation

# Test production build
npm run build

# Test static site generation
npm run generate

# Test preview of generated site
npm run preview
# Visit http://localhost:3000 and verify functionality
```

## Codebase Structure

### Key Directories
- `/content/` - Markdown documentation files organized by language (en, es, ru)
- `/components/` - Vue 3 components with TypeScript
- `/i18n/` - Internationalization configuration
- `/modules/algolia/` - Custom Algolia search integration
- `/pages/` - Nuxt.js 3 pages
- `/public/` - Static assets

### Important Files
- `nuxt.config.ts` - Main Nuxt.js configuration with i18n, content, and Algolia settings
- `package.json` - Dependencies and npm scripts
- `CLAUDE.md` - Project coding guidelines and style rules
- `README.md` - Project documentation with deployment commands

### Content Structure
- Content is organized as: `/content/{language}/{category}/{section}/`
- Example: `/content/en/1.astra/1.getting-started/1.first-steps/features.md`
- Supports English (en), Spanish (es), and Russian (ru)

## Technology Stack

### Core Technologies
- **Framework**: Nuxt.js 3.11.2 with Vue 3
- **Language**: TypeScript with explicit type annotations
- **Styling**: Tailwind CSS with dark mode support
- **Content**: Nuxt Content v2 for markdown processing
- **Internationalization**: @nuxtjs/i18n for multi-language support
- **Search**: Custom Algolia integration module

### Coding Standards
Follow the guidelines in `CLAUDE.md`:
- Use `<script setup lang="ts">` syntax for Vue components
- Components use PascalCase naming
- 4-space indentation
- Use `##` and `###` for headings in markdown (no `#` or deeper levels)
- Bold for UI element names, code blocks for commands

## Environment and Deployment

### Environment Variables
- `ALGOLIA_SECRET_KEY` - Required only for search indexing during build (optional for development)
- No other environment variables required for basic development

### Deployment Commands
- `npm run generate` - Creates static site in `.output/public`
- Production deployment: `tar -zHcf - dist | ssh cesbo.dev tar -C /opt/help -zxf -`

## Common Tasks

### Repository Root Contents
```
.
├── .github/
├── .gitignore
├── CLAUDE.md
├── README.md
├── app.vue
├── components/
├── content/
├── error.vue
├── i18n/
├── modules/
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── pages/
├── public/
├── redirects.conf
├── server/
├── tailwind.config.ts
└── tsconfig.json
```

### Content Categories
As defined in `nuxt.config.ts`:
- **Astra**: Getting Started, Admin Guide, Receiving, Processing, Monitoring, Delivery
- **Alta**: Getting Started, Admin Guide, OTT Settings  
- **Misc**: Tools & Utilities, Articles, Troubleshooting

### Search Integration
- Uses custom Algolia module in `/modules/algolia/`
- Categories automatically indexed when `ALGOLIA_SECRET_KEY` is set
- Search component is client-side only (`SiteSearch.client.vue`)

## Critical Reminders

- **NEVER CANCEL builds or long-running commands** - they may take up to 3 minutes
- **ALWAYS test navigation workflows** after making changes
- **NO test or lint commands exist** - do not attempt to run them
- **Static generation prerenders 2500+ routes** - this is normal and expected
- **Set appropriate timeouts** (120s for builds, 180s for generate)