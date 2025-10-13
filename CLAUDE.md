# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Project Architecture

This is an Astro-based landing page for the PupunhaCode community - a developer community from Amapá, Brazil. The project uses:

- **Astro 5.x** with static site generation
- **TailwindCSS 4.x** for styling via Vite plugin
- **TypeScript** support enabled
- **Cloudflare Pages** deployment (configured in wrangler.toml)

### Key Files and Structure

- `devs-amapa.ts` - Developer community member registry (root level file for easy PR contributions)
- `src/constants/site.ts` - Site-wide constants, URLs, and SEO configuration
- `src/pages/` - Astro pages (index, devs listing, participation guide)
- `src/components/` - Reusable Astro components (terminal UI theme)
- `src/layouts/Layout.astro` - Base layout with SEO meta tags

### Community Contribution Pattern

The main contribution mechanism is adding developer profiles to `devs-amapa.ts`. The structure expects:
```typescript
{
  name: string;
  github: string; // GitHub profile URL
}
```

### Terminal Theme Design

The site uses a terminal/CLI aesthetic with:
- Terminal window components (`TerminalWindow.astro`, `TerminalLine.astro`)
- File system metaphors for navigation
- Green/cyan color scheme matching terminal themes
- CSS custom properties for consistent spacing and colors

## Deployment

- Configured for Cloudflare Pages via wrangler.toml
- Static site output (`output: 'static'` in astro.config.mjs)
- Site URL: https://landing.pages.dev (development) / https://pupunhacode.com (production)