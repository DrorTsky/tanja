# Tanja -- Tanya Sherbakov Portfolio

Personal UX/UI portfolio website for **Tanya Sherbakov**. A fully responsive, multi-theme single-page site with four dedicated project case-study pages.

## Project Overview

- Single-page homepage with sections: **Intro**, **Work** (project cards), **About**, **Contact**
- Four case-study pages at `/work/:slug`: **Myfxbook**, **Marketlog**, **KillBills**, **Ichi**
- Fully responsive across three breakpoints: mobile (default), tablet (768px), desktop (1024px)
- Five swappable color themes with `localStorage` persistence
- All user-facing text centralized in a single constants file (no CMS, no external data)

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | ~5.9 | Type safety |
| Vite | 6 | Build tool and dev server (`@vitejs/plugin-react`) |
| Tailwind CSS | v4 | Styling via `@tailwindcss/vite` plugin (no `tailwind.config` file; config lives in `src/index.css` using the `@theme` directive) |
| React Router | v7 | Client-side routing (`BrowserRouter`, `Routes`, `Route`, `Link`) |
| lodash-es | 4.x | Utility functions used in place of native array/object methods (project convention) |
| Inter | -- | Primary typeface, loaded from Google Fonts in `index.html` |

## File Structure

```
/
  index.html                    # Entry HTML, loads Inter font
  package.json
  vite.config.ts                # Plugins: react(), tailwindcss()
  tsconfig.json                 # References tsconfig.app.json + tsconfig.node.json
  src/
    main.tsx                    # BrowserRouter + createRoot
    App.tsx                     # Top-level layout, routing (/, /work/*)
    constants.ts                # ALL text content, nav items, project metadata
    index.css                   # Tailwind v4 @theme tokens + 5 color themes + grid vars
    hooks/
      useActiveSection.ts       # Scroll-based tracking for nav highlight (no IntersectionObserver)
      useActiveProject.ts       # IntersectionObserver for Work sub-nav highlight
      useTheme.ts               # Theme index state + localStorage + data-theme attribute
    components/
      Header.tsx                # Logo (SVG blob) + hamburger toggle
      Nav.tsx                   # Desktop sidebar nav with Work submenu
      MobileMenu.tsx            # Full-screen mobile nav overlay
      IntroSection.tsx          # Hero heading
      WorkSection.tsx           # Grid of ProjectCard links
      ProjectCard.tsx           # Responsive card with d/t/m images + title
      AboutSection.tsx          # Values list + paragraphs
      ContactSection.tsx        # Status dot, email/LinkedIn/Resume links, artwork
      StickyIcons.tsx           # Fixed bottom-left: grid overlay toggle + ThemeSlider
      ThemeSlider.tsx           # Draggable 5-dot vertical slider for theme switching
      ScrollToTop.tsx           # Scroll-to-top on route change
      ScrollDownLink.tsx        # Animated page transition (slide-up exit, fade-in enter)
      MyfxbookPage.tsx          # Case study: Myfxbook prop-firm ecosystem
      MarketlogPage.tsx         # Case study: Marketlog calendar mobile adaptation
      KillBillsPage.tsx         # Case study: KillBills bill-splitting app
      IchiPage.tsx              # Case study: Ichi sushi delivery app
    assets/
      logo.svg, divider.svg, arrow-icon.svg, chevron-*.svg, social-*.svg
      myfxbook-*.png            # Standalone Myfxbook screenshots (d/m variants)
      portfolio/
        homepage/               # Homepage project card images (d-/t-/m- prefixes)
        myfxbook/               # 5 screenshots x 3 sizes (d-/t-/m-)
        Marketlog/              # 3 screenshots x 3 sizes
        Killbills/              # 7 screenshots x 3 sizes
        ichi/                   # 12 screenshots x 3 sizes
```

## Architecture

### Routing

- `/` renders `HomePage` (Intro + Work + About + Contact sections stacked vertically)
- `/work/*` renders individual project pages via `ProjectPageLayout` with nested routes for each slug
- Navigation between project pages uses `ScrollDownLink` for animated transitions (slide-up exit, opacity fade-in enter)
- Project pages are linked circularly: Myfxbook -> Marketlog -> KillBills -> Ichi -> Homepage

### Layout Shell

```
#page-root
  ScrollToTop
  Header            (logo + mobile hamburger)
  MobileMenu        (overlay, hidden on lg+)
  flex row (lg+)
    Nav             (sticky sidebar, visible on lg+ only)
    #page-content
      Routes        (HomePage | ProjectPageLayout)
  StickyIcons       (grid toggle + ThemeSlider, fixed bottom-left)
```

### Theming

- 5 themes (index 0-4) controlled via `data-theme` attribute on `<html>`
- Theme 0 (default): light (`#fbfbfb` background, dark text)
- Themes 1-4: olive, blue, dark-green, near-black
- Themes 1-4 apply `mix-blend-mode: luminosity` to project images via the `--img-blend` CSS variable and the `.themed-img` utility class
- Persisted in `localStorage` under key `portfolio-theme`
- Switched via `ThemeSlider` (vertical pill with draggable sun icon)
- Hook: `useTheme` manages the active index, reads/writes `localStorage`, and toggles the `data-theme` attribute

### Grid System

- CSS custom properties in `src/index.css`: `--grid-padding`, `--grid-gutter`, `--grid-columns`, `--grid-max-width`
- 2 columns on mobile, 6 on tablet (768px+), 12 on desktop (1024px+)
- Max container width: 1280px
- Nav width and offset calculated from grid column widths (`--nav-width`, `--nav-total-offset`)
- Toggleable grid overlay (`StickyIcons` > `GridOverlay`) for design verification during development

### Content Management

- ALL user-facing text is centralized in `src/constants.ts`
- No CMS or external data fetching -- purely static content
- Project metadata (titles, descriptions, slugs, layouts) defined as typed `as const` arrays

### Responsive Images

- Each project screenshot ships in 3 sizes: desktop (`d-`), tablet (`t-`), mobile (`m-`)
- Rendered via `<picture>` with `<source media="...">` for each breakpoint
- Homepage cards use a `ProjectImages` record keyed by project index

### Navigation State

- `useActiveSection`: scroll-position-based tracking (no IntersectionObserver) that highlights the current homepage section in the nav; returns `"work"` when on a project page
- `useActiveProject`: IntersectionObserver-based tracking that highlights the most visible project card in the Work sub-nav; only active when the Work section is in view on the homepage
- Both `Nav` and `MobileMenu` support navigating from a project page back to a specific homepage section by polling for the target element after `navigate("/")`

## Conventions

- **Constants over hardcoded strings** -- all text lives in `constants.ts`
- **lodash-es everywhere** -- `map`, `findLast`, `get`, `times`, `clamp` are used instead of native array/object methods
- **CSS class constants** -- reusable Tailwind class strings are stored in constants at the top of component files (e.g., `SECTION_HEADING_CLASS`, `BODY_TEXT_CLASS`)
- **Consistent case-study pattern** -- each project page follows the same structure: title block, content sections interleaved with responsive images, horizontal divider, "next project" link via `ScrollDownLink`
- **No global state library** -- state is managed via local `useState` and custom hooks

## Dev Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript check + Vite production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |
