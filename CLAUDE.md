# Cesbo Help Documentation Project Guidelines

## Build Commands
- Development server: `npm run dev`
- Production build: `npm run build`
- Static site generation: `npm run generate`
- Preview build: `npm run preview`
- Deploy: `tar -zHcf - dist | ssh cesbo.dev tar -C /opt/help -zxf -`

## Content
- Default language: English
- Additional languages: Russian, Spanish
- Use Markdown for content files
- Use `##` for main headings and `###` for subheadings

## Code Style

### Components
- Use Vue 3 with `<script setup lang="ts">` syntax
- Components use PascalCase naming (e.g., `SiteMenu.vue`)
- Template section first, followed by script section
- Client-side-only components use `.client.vue` suffix

### TypeScript
- Always use TypeScript with explicit type annotations
- Define props using `defineProps<{...}>()`
- Add type annotations for function parameters and returns

### CSS/Styling
- Use Tailwind CSS with utility-first approach
- Group related Tailwind classes logically
- Use multi-line class attributes for readability
- Support dark mode with `dark:` variant classes

### Formatting
- Use 4-space indentation
- Prefer explicit imports over global auto-imports
- Follow Markdown formatting rules from README.md
  - Only use `##` and `###` level headings
  - No nested lists
  - Use bold for UI element names
  - Use code blocks for examples and commands
