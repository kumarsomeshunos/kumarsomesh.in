# Personal Website Frontend - v2 (Tailwind v4 Prototype)

> **Status:** Archived / Prototype
> **Version Codename:** Tailwind-First Playground
> **Stack:** Next.js 15.4.1 | React 19.1.0 | Tailwind CSS v4 | Turbopack

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Pages and Routing](#pages-and-routing)
- [Component Inventory](#component-inventory)
- [Data Layer](#data-layer)
- [Styling Approach](#styling-approach)
- [Key Features](#key-features)
- [Wrapper Component Documentation](#wrapper-component-documentation)
- [Setup and Running](#setup-and-running)
- [Known Limitations](#known-limitations)
- [Evolution Notes](#evolution-notes)

---

## Overview

This is the **second iteration** of the personal portfolio website, a **prototype/playground** that experiments with a **Tailwind-first styling approach**. It abandons the CSS-in-JS system from v1 in favor of Tailwind v4 utility classes managed via a custom `modifyClassNames` utility.

The main `page.js` (243 lines) serves as a **demo/test page** with inline data, testing various component combinations: Navbar, Hero via TwoPaneLayout, and ProjectCards in a MasonryCardHolder. This is not a production-ready site. It is a workbench for validating the component API and styling system.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 15.4.1 | React framework (App Router) |
| **React** | 19.1.0 | UI library |
| **Tailwind CSS** | ^4 | Utility CSS framework (v4 with `@import "tailwindcss"`) |
| **@tailwindcss/postcss** | ^4 | PostCSS plugin for Tailwind v4 |
| **ESLint** | ^9 | Code linting (flat config) |
| **react-masonry-css** | ^1.0.16 | Masonry grid layout |
| **Turbopack** | Built-in | Dev server bundler |

### Changes from v1
- Tailwind **v3 to v4** (new `@import "tailwindcss"` syntax, `@tailwindcss/postcss` plugin)
- Added `react-masonry-css`
- Removed `deepMerge` and `generateCSS` utilities
- New `modifyClassNames` utility replaces entire CSS-in-JS engine

---

## Architecture Overview

```
page.js (Demo)
  Inline data + styling objects per component
       |
       v  passes { data, styling }
Components
  Each accepts:
  - data: content (text, links, images)
  - styling: { tailwind: { add: [], remove: [] },
               vanilla: { key: value } }
       |
       v  uses
utils/styling/modifyClassNames.js
  Takes default class array + {add, remove}
  modifications and returns merged class string
```

**Flow:**
1. Each component has **hardcoded default Tailwind classes** (as arrays)
2. Parent passes `styling.tailwind.{element}.{add/remove}` to override
3. `modifyClassNames(defaults, modifications)` merges them into a class string
4. Optional `styling.vanilla.{element}` provides inline style overrides

---

## Project Structure

```
personal-website-frontend-v2/
|-- .git/                              # Git repository
|-- .gitignore
|-- eslint.config.mjs                  # ESLint 9 flat config (next/core-web-vitals)
|-- jsconfig.json                      # Path alias: @/* -> ./*
|-- next.config.mjs                    # Remote images: all hostnames allowed
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs                 # @tailwindcss/postcss (Tailwind v4)
|-- README.md                          # This file
|
|-- app/
|   |-- favicon.ico
|   |-- globals.css                    # @import "tailwindcss", dark mode vars,
|   |                                  #   link underline animation
|   |-- layout.js                      # Root layout: Geist + Geist Mono fonts,
|   |                                  #   GlobalWrapper with no styling
|   +-- page.js                        # Demo/playground page (243 lines)
|                                      #   Inline data + styling, tests all components
|
|-- components/
|   |-- core/
|   |   |-- Buttons/
|   |   |   +-- MainButton/
|   |   |       +-- MainButton.js      # Link button component
|   |   |-- Cards/
|   |   |   |-- BlogCard/              # Blog card component
|   |   |   |-- MasonryCardHolder/     # Masonry grid wrapper (react-masonry-css)
|   |   |   +-- ProjectCard/           # Project card with image, links, status
|   |   |-- Heading/
|   |   |   +-- Heading.js             # Section heading + subheading + hr
|   |   |-- TwoPaneLayout/
|   |   |   +-- TwoPaneLayout.js       # Two-column responsive layout
|   |   +-- Wrappers/
|   |       |-- GlobalWrapper.js       # Root wrapper
|   |       |-- GlobalWrapper.md       # Component documentation (markdown)
|   |       |-- SectionWrapper.js      # Section-level wrapper
|   |       +-- SectionWrapper.md      # Component documentation (markdown)
|   +-- section/
|       +-- Navbar/
|           +-- Navbar.js              # Navigation bar component
|
|-- utils/
|   +-- styling/
|       +-- modifyClassNames.js        # Tailwind class add/remove utility
|
+-- public/
    |-- file.svg
    |-- globe.svg
    |-- next.svg
    |-- vercel.svg
    +-- window.svg
```

---

## Pages and Routing

| Route | File | Description |
|---|---|---|
| `/` | `app/page.js` | Demo page. No route groups, single flat page. |

**No route groups** in this version. The single `page.js` is a 243-line playground that demonstrates:
- Navbar with custom blue background (`bg-blue-800`)
- Hero section using TwoPaneLayout (bio text + profile image)
- Animated GIF background section
- Project cards in a 3-column masonry grid (5 duplicate cards)
- Heading components

---

## Component Inventory

### Core Components

| Component | Location | Description |
|---|---|---|
| **GlobalWrapper** | `components/core/Wrappers/GlobalWrapper.js` | Root wrapper. Accepts `styling` prop with `tailwind` (main, wallpaper, container) and `vanilla` (inline styles). |
| **SectionWrapper** | `components/core/Wrappers/SectionWrapper.js` | Section-level wrapper. Same styling API as GlobalWrapper. |
| **TwoPaneLayout** | `components/core/TwoPaneLayout/TwoPaneLayout.js` | Two-column layout. Accepts `leftContent`, `rightContent`, and `styling` props. |
| **MainButton** | `components/core/Buttons/MainButton/MainButton.js` | Link button. Accepts `data: { text, value }` and `styling`. |
| **Heading** | `components/core/Heading/Heading.js` | Section heading. Accepts `data: { heading, subheading, hr }` and optional `styling`. |
| **MasonryCardHolder** | `components/core/Cards/MasonryCardHolder/MasonryCardHolder.js` | Masonry grid using `react-masonry-css`. Accepts `breakpointCols` and wraps children. |
| **ProjectCard** | `components/core/Cards/ProjectCard/ProjectCard.js` | Card displaying project info: title, date, status, description, image, links. |
| **BlogCard** | `components/core/Cards/BlogCard/` | Blog card component (minimal implementation). |

### Sectional Components

| Component | Location | Description |
|---|---|---|
| **Navbar** | `components/section/Navbar/Navbar.js` | Navigation with logo, version badge, and scrollable link list. Accepts `data` and `styling`. |

> Note: Only Navbar exists as a sectional component. Hero, Projects, Blogs, Now, and Footer are NOT yet extracted. They exist only as inline JSX in `page.js`.

---

## Data Layer

**No centralized data files.** All content is **inline in `page.js`**:

```javascript
// Navbar data defined inline in page.js
const data = {
  name: "Somesh Kumar",
  version: "MK-X",
  navbarLinks: [
    { key: "Home", value: "/" },
    { key: "Projects", value: "/projects" },
    // ...
  ],
};

// Hero content defined as JSX constants
const leftContent = (<div><h1>Hi, I am Somesh Kumar</h1>...</div>);
const rightContent = (<img src="..." alt="Hero Image" />);

// Project data duplicated 5 times for Careers Portal cards
```

Content includes:
- **Name:** Somesh Kumar
- **Bio:** "a fourth-year B.Tech student at Manipal University | Jaipur" (updated from v1's "third-year")
- **Version:** MK-X
- **Nav links:** Home, Projects, Blogs, Now, Contact, Updates
- **Demo project:** Careers Portal (Manipal University)

---

## Styling Approach

### modifyClassNames Utility

The core styling utility that replaced v1's `generateCSS` + `deepMerge`:

```javascript
modifyClassNames(defaultClassNames, modifications)
// defaultClassNames: string[] - base Tailwind classes
// modifications: { add?: string[], remove?: string[] }
// Returns: string - space-joined class names

// Example:
modifyClassNames(
  ["flex", "p-4", "bg-white"],
  { add: ["bg-blue-800", "text-white"], remove: ["bg-white"] }
)
// Result: "flex p-4 bg-blue-800 text-white"
```

- Uses a `Set` internally for deduplication
- `remove` is processed before `add`
- Invalid entries (non-strings, empty strings) are filtered out

### Tailwind v4 Integration

- Uses the new `@import "tailwindcss"` syntax (no `@tailwind base/components/utilities` directives)
- PostCSS config uses `@tailwindcss/postcss` instead of `tailwindcss`
- No `tailwind.config.js`. Tailwind v4 uses CSS-based configuration.

### Styling Props Pattern

Every component accepts a `styling` prop with this shape:

```javascript
{
  tailwind: {
    main: { add: [...], remove: [...] },      // For the root element
    wallpaper: { add: [...], remove: [...] },  // For background layer
    container: { add: [...], remove: [...] },  // For content container
    // ... component-specific elements
  },
  vanilla: {
    main: { /* inline CSS */ },
    wallpaper: { /* inline CSS */ },
    container: { /* inline CSS */ },
  }
}
```

Components that accept nested child styling (e.g., Navbar wraps SectionWrapper):
```javascript
{
  sectionWrapper: {
    tailwind: { main: { add: ["bg-blue-800"] } }
  }
}
```

---

## Key Features

1. **Tailwind v4** - One of the first versions to use the new `@import "tailwindcss"` syntax
2. **modifyClassNames utility** - Clean add/remove API for dynamic Tailwind class management
3. **Demo/playground page.js** - 243-line test bed with inline data and styling overrides
4. **Markdown documentation** - `GlobalWrapper.md` and `SectionWrapper.md` provide component API docs
5. **Masonry grid** - First version to use `react-masonry-css` for project card layouts
6. **GIF section background** - Demo uses animated GIF wallpaper via Tailwind bg-url classes
7. **Geist + Geist Mono** fonts (Vercel fonts, different from v1's Noto Sans)
8. **No CSS Modules** for wrapper components: Tailwind-only styling

---

## Wrapper Component Documentation

This version includes `.md` documentation files alongside wrapper components:

- **`GlobalWrapper.md`** - Documents the GlobalWrapper component API, props, and usage
- **`SectionWrapper.md`** - Documents the SectionWrapper component API, props, and usage

These served as internal docs for the styling system API.

---

## Setup and Running

```bash
# Install dependencies
npm install

# Run development server (uses Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

The site will be available at `http://localhost:3000`.

**Note:** The site title is still the default "Create Next App". It was never customized in this version.

---

## Known Limitations

- **Prototype/playground** - Not a production-ready website, just a component testbed
- **All data is inline** - No data files, no content management
- **No additional pages** - Only the home route exists
- **No sectional components** except Navbar - Hero, Projects, Blogs, Now, Footer are not extracted
- **BlogCard** exists but appears to have minimal/empty implementation
- **Default metadata** - Title is "Create Next App", description is "Generated by create next app"
- **No theming** - No dark mode toggle, no cookie-based themes
- **No middleware**
- **5 duplicate ProjectCards** in the demo - Same Careers Portal data repeated for layout testing
- **Hardcoded image URLs** - Uses `beta.kumarsomesh.in` and Prismic CDN URLs directly

---

## Evolution Notes

### What changed from v1
- **Dropped CSS-in-JS** - `generateCSS`, `deepMerge`, and `defaults/styling/` are all gone
- **New `modifyClassNames` utility** replaces the entire styling engine with a simpler add/remove API
- **Tailwind v3 to v4** - New import syntax, new PostCSS plugin
- **New components:** Heading, MasonryCardHolder, ProjectCard, BlogCard
- **Font changed:** Noto Sans to Geist + Geist Mono
- **Component docs:** Added `.md` documentation files
- **Simpler architecture:** No CSS variables for styling (only Tailwind classes)

### What led to the next version (v3)
- Inline data made the page unwieldy and needed a proper data layer
- Components needed to be extracted into sectional components (Hero, Projects, etc.)
- The `modifyClassNames` utility worked well and was kept (with verbose logging added)
- Needed proper content separation between data and styles
- Version naming was formalized: "MK-X"
