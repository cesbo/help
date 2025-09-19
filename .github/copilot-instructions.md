# Cesbo Help Documentation Project

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Dependencies
- Node.js v20+ is required (current: v22.19.0)
- `npm install` -- takes ~50 seconds. NEVER CANCEL. Set timeout to 120+ seconds.

### Build Commands
- `npm run dev` -- development server on http://localhost:4321. Starts in ~10-15 seconds.
- `npm run build` -- static site generation. Takes ~30 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- `npm run preview` -- preview generated static site on http://localhost:4321

### No Tests or Linting
- This repository has NO test framework configured
- This repository has NO linting or formatting tools (ESLint, Prettier, etc.)
- Do NOT attempt to run `npm test`, `npm run lint`, or `npm run format` - these commands do not exist

## Validation

### Required Manual Testing Scenarios
ALWAYS test these complete user scenarios after making changes:

1. **Homepage Navigation**: Start dev server, navigate to http://localhost:4321/en/, verify all category cards (Astra, Alta, Articles) display correctly
2. **Content Navigation**: Click "Learn more" under Astra → verify sidebar navigation appears → click "Installing Astra" → verify content loads with table of contents
4. **Multi-language Support**: Test that content exists in /src/content/docs/en, /src/content/docs/es, /src/content/docs/ru directories
5. **Static Generation**: Run `npm run build` and verify 2500+ routes are prerendered successfully

### Build Validation Commands
Always run these commands to validate your changes:
```bash
# Install dependencies (required first time)
npm install

# Test development server
npm run dev
# Visit http://localhost:4321 and test navigation

# Test static site generation
npm run build

# Test preview of generated site
npm run preview
# Visit http://localhost:3000 and verify functionality
```

## Codebase Structure

### Key Directories
- `/src/content/docs/` - Markdown documentation files organized by language (en, es, ru)
- `/src/components/` - Astro components with TypeScript
- `/src/content/i18n/` - Internationalization configuration
- `/src/assets/` - Static assets processed by build (images, fonts, etc.)
- `/public/` - Static assets are always served or copied into the build folder as-is, with no processing

### Important Files
- `astro.config.mjs` - Main Astro configuration
- `package.json` - Dependencies and npm scripts
- `README.md` - Project documentation with deployment commands

### Content Structure
- Content is organized as: `/src/content/docs/{language}/{category}/{section}/`
- Example: `/src/content/docs/en/astra/getting-started/backup.md`
- Supports English (en), Spanish (es), and Russian (ru)

## Technology Stack

### Core Technologies
- **Framework**: Astro v5
- **Language**: TypeScript with explicit type annotations
- **Styling**: Tailwind CSS with dark mode support
- **Content**: Astro Starlight for documentation

### Coding Standards
- Always use English language for code comments
- 4-space indentation
- Use `##` and `###` for headings in markdown (no `#` or deeper levels)

## Environment and Deployment

### Environment Variables
- No environment variables required for basic development

### Deployment Commands
- `npm run build` - Creates static site in `dist` directory
- Production deployment: `tar -zHcf - dist | ssh cesbo.dev tar -C /opt/help -zxf -`

## Common Tasks

### Content Categories
- **Astra** - Software headend for Digital TV broadcasting over cable, satellite, terrestrial, and IP networks.
- **Alta** - Software for live and video on demand content deliver.
- **Senta** - Software for video transcoding with FFmpeg.
- **MPEG-TS Analyzer** - Tool based on Astra for analyzing MPEG-TS streams.
- **Articles** - General articles about system administration, tools, and protocols.

## Critical Reminders

- **NEVER CANCEL builds or long-running commands** - they may take up to 3 minutes
- **ALWAYS test navigation workflows** after making changes
- **NO test or lint commands exist** - do not attempt to run them
- **Static generation prerenders 2500+ routes** - this is normal and expected
- **Set appropriate timeouts** (120s for build)


## Writing Guidelines

- **Focus on Solutions, Not Features**: Technical or product-oriented content, always prioritize explaining how the product solves the reader's problem, rather than diving into software features and specs. People care about how a product benefits them.
- **Simplicity and Clarity**: The language I use is simple, often understandable by a 10-year-old, following principles that say clarity beats complexity. The idea is to make communication as effortless as possible for the reader​​.
- **Short and Straightforward Sentences**: Keep sentences short and easy to read. Avoid unnecessary filler words, vague phrases, or redundant explanations.
- **Use of Examples**: Provide practical examples to illustrate concepts, especially for code-related content.
- **Consistent Terminology**: Use consistent terminology across all documentation to avoid confusion.

## Words and Phrases to Avoid

Avoid using vague, overused, or marketing-style expressions. These phrases often sound artificial, add no real value, and make documentation feel less trustworthy. Use plain, specific language instead.

Below are examples of phrases to avoid, with explanations and better alternatives:

- **"Seamlessly integrated"** - Avoid because: Overused in tech writing, sounds like a brochure. Use: "Works well with..." or describe how the integration functions.
- **"In today's fast-paced world"** - Avoid because: Generic and clichéd. "As things evolve quickly..." or skip entirely.
- **"Cutting-edge technology"** - Avoid because: Buzzword, lacks substance. Use: "Modern tech used to..." or describe the actual innovation.
- **"Let's dive in"** - Avoid because: Informal and overused by AI tools. Use: "Here's what you need to know...".
- **"Transformative experience"** - Avoid because: Sounds like corporate marketing. Use: "An experience that changed the way we…".
- **"Firstly, secondly, lastly"** - Avoid because: Too formal and rigid. Use: "Next," "Then," "Finally".
- **"Game-changer" / "Disruptive innovation" / "Paradigm shift"** - Avoid because: All buzzwords with little meaning. Use: Describe the actual impact with specifics.
- **"Unlock your potential" / "Maximize your potential" / "Achieve your goals"** - Avoid because: Motivational language not suitable for technical writing. Use: Describe actionable results or outcomes.
- **"Scalable solution" / "Optimize performance"** - Avoid because: Vague technical jargon. Use: "Handles more users as your app grows", "Get faster results".
- **"Utilizing resources" / "Leveraging data" / "Strategic alignment"** - Avoid because: Sterile and corporate-sounding. Use: "Using data to..." or "Getting people aligned on…".
- **"Future-proof" / "World-class" / "Best-in-class"** - Avoid because: Marketing fluff, hard to verify. Use: "Reliable even as things change", or describe what makes it good.
- **"Customer-centric" / "Win-win" / "Out-of-the-box thinking"** - Avoid because: Jargon with no clear value. Use: "Focused on helping customers", "Creative solution".
- **“Streamline your workflow”** - Avoid because: Overused in AI and corporate text. Try: "Make your work easier and faster," or explain the specific improvement.

In general:

- Avoid slogans and metaphors unless they clarify meaning.
- Always favor specific, human-sounding descriptions over general marketing language
