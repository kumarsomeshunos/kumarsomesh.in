# Personal Website Frontend — v3 (Tailwind v4 Full Rewrite)

> **Status:** Archived / Most Recent Experimental Branch  
> **Version Codename:** Data/Styling Separation Architecture  
> **Stack:** Next.js 15.4.4 · React 19.1.0 · Tailwind CSS v4 · Turbopack

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Pages & Routing](#pages--routing)
- [Component Inventory](#component-inventory)
- [Data Layer](#data-layer)
  - [Data Files](#data-files)
  - [NavbarData.js Example](#navbardatajs-example)
  - [Data/Styling Separation Pattern](#datastyling-separation-pattern)
- [Styling Approach](#styling-approach)
  - [ModifyClassNames Utility](#modifyclassnames-utility)
  - [Tailwind + Vanilla Dual Styling](#tailwind--vanilla-dual-styling)
  - [Per-Card Styling Overrides](#per-card-styling-overrides)
- [Key Features & Unique Aspects](#key-features--unique-aspects)
- [Setup & Running](#setup--running)
- [Known Limitations](#known-limitations)
- [Evolution Notes](#evolution-notes)

---

## Overview

This is the **third and most architecturally evolved iteration** of the personal portfolio website on the Next.js 15 / React 19 branch. It builds on v2's Tailwind-first approach by introducing a clean **data/styling separation pattern**: each section has its own data file exporting both a `*Data` object (content) and a `*Styles` object (styling configuration).

All home page sections (Navbar, Hero, Projects, Blogs, Now, Footer) are implemented as **proper sectional components** with a consistent API. This is the closest the experimental branch got to a production-ready architecture before the v4 (active) branch took over.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | **15.4.4** (newest) | React framework (App Router) |
| **React** | 19.1.0 | UI library |
| **Tailwind CSS** | ^4 | Utility CSS framework (`@import "tailwindcss"`) |
| **@tailwindcss/postcss** | ^4 | PostCSS plugin for Tailwind v4 |
| **ESLint** | ^9 | Code linting (flat config) |
| **react-masonry-css** | ^1.0.16 | Masonry grid layout |
| **Turbopack** | Built-in | Dev server bundler |

### Changes from v2
- Next.js **15.4.1 → 15.4.4**
- Added dedicated `data/` directory (6 data files)
- All home sections extracted as proper sectional components
- New components: `StyledLink`, `Tag`, `QuoteCard`, `NowCards`, `InsertHtml`
- `ModifyClassNames` now has verbose logging (PascalCase filename)

---

## Architecture Overview

```
┌────────────────────────────────────────────────────────┐
│                  data/ Directory                        │
│  NavbarData.js  │  HeroData.js  │  ProjectsData.js     │
│  BlogsData.js   │  NowData.js   │  FooterData.js       │
│                                                         │
│  Each exports: { *Data, *Styles }                       │
│  *Data  = content (text, links, images, arrays)         │
│  *Styles = Tailwind class modifications per element     │
└───────────────┬──────────────────┬─────────────────────┘
                │ data             │ styling
┌───────────────▼──────────────────▼─────────────────────┐
│                   page.js                               │
│  Imports data + styles, passes to sectional components  │
│  <Navbar data={NavbarData} styling={NavbarStyles} />    │
│  <Hero left={HeroData.left} right={...} styling={...}/> │
│  <Projects data={...} styling={...} />                  │
│  <Blogs data={...} styling={...} />                     │
│  <Now data={...} styling={...} />                       │
│  <Footer data={...} styling={...} />                    │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│              Sectional Components                       │
│  components/sectional/Home/{Navbar,Hero,Projects,...}   │
│  Each receives data + styling, renders core components  │
└───────────────────────────┬────────────────────────────┘
                            │ uses
┌───────────────────────────▼────────────────────────────┐
│                Core Components                          │
│  SectionWrapper, TwoPaneLayout, MainButton, Heading,   │
│  ProjectCard, BlogCard, NowCards, MasonryCardHolder,    │
│  StyledLink, Tag, QuoteCard, InsertHtml                 │
│                                                         │
│  Each uses ModifyClassNames(defaults, modifications)    │
└────────────────────────────────────────────────────────┘
```

**Flow:**
1. `data/*.js` files export content (`*Data`) and style configs (`*Styles`) separately
2. `page.js` imports both and passes them as props to sectional components
3. Sectional components compose core components, forwarding relevant data/styling slices
4. Core components use `ModifyClassNames` to merge default Tailwind classes with overrides

---

## Project Structure

```
personal-website-frontend-v3/
├── .git/                              # Git repository
├── .gitignore
├── eslint.config.mjs                  # ESLint 9 flat config
├── jsconfig.json                      # Path alias: @/* → ./*
├── next.config.mjs                    # Remote images: all hostnames allowed
├── package.json
├── package-lock.json
├── postcss.config.mjs                 # @tailwindcss/postcss (Tailwind v4)
├── README.md                          # This file
│
├── data/
│   ├── NavbarData.js                  # Navbar content + styling config
│   ├── HeroData.js                    # Hero content (greetings, name, bio,
│   │                                  #   buttons, image) + styling
│   ├── ProjectsData.js               # Projects list + card styling config
│   ├── BlogsData.js                   # Blogs list + styling config
│   ├── NowData.js                     # "Now" section content + styling
│   └── FooterData.js                  # Footer links + quote + styling
│
├── app/
│   ├── favicon.ico
│   ├── globals.css                    # Minimal: @import "tailwindcss" only
│   │                                  #   (all other styles commented out)
│   ├── layout.js                      # Root layout: Geist fonts,
│   │                                  #   GlobalWrapper with styling prop
│   └── page.js                        # Home page: imports all data files,
│                                      #   renders all sectional components
│
├── components/
│   ├── core/
│   │   ├── Buttons/
│   │   │   └── MainButton/
│   │   │       └── MainButton.js      # Link button with styling overrides
│   │   ├── Cards/
│   │   │   ├── BlogCard/
│   │   │   │   └── BlogCard.js        # Blog card with tags, description
│   │   │   ├── MasonryCardHolder/
│   │   │   │   └── MasonryCardHolder.js  # Masonry grid wrapper
│   │   │   ├── NowCards/
│   │   │   │   └── NowCards.js        # "Now" section card (music, etc.)
│   │   │   ├── ProjectCard/
│   │   │   │   └── ProjectCard.js     # Project card with image + links
│   │   │   └── QuoteCard/
│   │   │       └── QuoteCard.js       # Quote display with attribution
│   │   ├── Heading/
│   │   │   └── Heading.js             # Section heading + subheading
│   │   ├── InsertHtml/
│   │   │   ├── InsertHtml.js          # Raw HTML renderer (dangerouslySetInnerHTML)
│   │   │   └── InsertHtml.module.css  # Styling for rendered HTML content
│   │   ├── StyledLink/
│   │   │   └── StyledLink.js          # Link with underline animation
│   │   ├── Tag/
│   │   │   └── Tag.js                 # Tag/badge component
│   │   ├── TwoPaneLayout/
│   │   │   └── TwoPaneLayout.js       # Two-column responsive layout
│   │   └── Wrappers/
│   │       ├── GlobalWrapper.js       # Root wrapper
│   │       └── SectionWrapper.js      # Section-level wrapper
│   └── sectional/
│       └── Home/
│           ├── Blogs/
│           │   └── Blogs.js           # Blogs section with BlogCards
│           ├── Footer/
│           │   └── Footer.js          # Footer with links + QuoteCard
│           ├── Hero/
│           │   └── Hero.js            # Hero section (TwoPaneLayout + InsertHtml)
│           ├── Navbar/
│           │   └── Navbar.js          # Navigation bar
│           ├── Now/
│           │   └── Now.js             # "Now" section with NowCards
│           └── Projects/
│               └── Projects.js        # Projects section with MasonryCardHolder
│
├── utils/
│   └── styling/
│       └── ModifyClassNames.js        # Tailwind class add/remove utility
│                                      #   (PascalCase, with verbose warnings)
│
└── public/
    ├── file.svg
    ├── globe.svg
    ├── next.svg
    ├── vercel.svg
    └── window.svg
```

---

## Pages & Routing

| Route | File | Description |
|---|---|---|
| `/` | `app/page.js` | Home page — all 6 sections rendered |

This version uses a **single flat page** (no route groups). All content is on the home page:

```jsx
<Navbar data={NavbarData} styling={NavbarStyles} />
<Hero left={HeroData.left} right={HeroData.right} styling={HeroStyles} />
<Projects data={ProjectsData} styling={ProjectsStyles} />
<Blogs data={BlogsData} styling={BlogsStyles} />
<Now data={NowData} styling={NowStyles} />
<Footer data={FooterData} styling={FooterStyles} />
```

No individual project/blog detail pages, no contact page, no themes page.

---

## Component Inventory

### Core Components (12)

| Component | Location | Description |
|---|---|---|
| **GlobalWrapper** | `core/Wrappers/GlobalWrapper.js` | Root wrapper with main, wallpaper, and container layers. |
| **SectionWrapper** | `core/Wrappers/SectionWrapper.js` | Per-section wrapper. Same layered structure. |
| **TwoPaneLayout** | `core/TwoPaneLayout/TwoPaneLayout.js` | Two-column responsive layout. |
| **MainButton** | `core/Buttons/MainButton/MainButton.js` | Link button with hover effects. |
| **Heading** | `core/Heading/Heading.js` | Section heading with optional subheading and `<hr>`. |
| **MasonryCardHolder** | `core/Cards/MasonryCardHolder/MasonryCardHolder.js` | Masonry grid using `react-masonry-css`. |
| **ProjectCard** | `core/Cards/ProjectCard/ProjectCard.js` | Project display: title, date, status, description, image, links. |
| **BlogCard** | `core/Cards/BlogCard/BlogCard.js` | Blog display: title, date, tags, description. |
| **NowCards** | `core/Cards/NowCards/NowCards.js` | Card for "now" section (music, media). |
| **QuoteCard** | `core/Cards/QuoteCard/QuoteCard.js` | Inspirational quote with author and action button. |
| **StyledLink** | `core/StyledLink/StyledLink.js` | Link with animated underline effect. |
| **Tag** | `core/Tag/Tag.js` | Small tag/badge component (for blog categories, etc.). |
| **InsertHtml** | `core/InsertHtml/InsertHtml.js` | Renders raw HTML via `dangerouslySetInnerHTML`. |

### Sectional Components (6)

| Component | Location | Description |
|---|---|---|
| **Navbar** | `sectional/Home/Navbar/Navbar.js` | Sticky navigation with logo, version, and StyledLink items. |
| **Hero** | `sectional/Home/Hero/Hero.js` | Hero with TwoPaneLayout — left: greetings/name/bio/buttons, right: image. |
| **Projects** | `sectional/Home/Projects/Projects.js` | Projects grid using Heading + MasonryCardHolder + ProjectCards. |
| **Blogs** | `sectional/Home/Blogs/Blogs.js` | Blogs section with Heading + BlogCards (with Tags). |
| **Now** | `sectional/Home/Now/Now.js` | "Now" section showing current activity (music, etc.). |
| **Footer** | `sectional/Home/Footer/Footer.js` | Footer with quick links + QuoteCard. |

---

## Data Layer

### Data Files

Each file in `data/` exports two named exports:

| File | Data Export | Styles Export | Content |
|---|---|---|---|
| `NavbarData.js` | `NavbarData` | `NavbarStyles` | Name ("Somesh Kumar"), version ("MK-X"), 6 nav links |
| `HeroData.js` | `HeroData` | `HeroStyles` | Greetings, name, HTML bio, buttons (Projects/Blogs), profile image |
| `ProjectsData.js` | `ProjectsData` | `ProjectsStyles` | Heading + 5 projects (IEEE Genesis, plus 4 placeholder projects) |
| `BlogsData.js` | `BlogsData` | `BlogsStyles` | Heading + blog entries with tags |
| `NowData.js` | `NowData` | `NowStyles` | "Currently listening" music data |
| `FooterData.js` | `FooterData` | `FooterStyles` | Footer links + inspirational quote (Roosevelt) |

### NavbarData.js Example

```javascript
// Style configuration — Tailwind class modifications per element
const NavbarStyles = {
  tailwind: {
    main: { add: ["sticky", "top-0", "z-10", "border-b"] },
    wrapper: { add: ["py-4"] },
    ul: { add: ["flex", "overflow-x-auto", ...] },
    li: { add: ["mr-8"] },
  },
  vanilla: { main: {}, wrapper: {}, ul: {}, li: {} },
  sectionWrapper: {
    tailwind: { wallpaper: { add: ["bg-white"] } },
  },
  styledLinkName: { tailwind: { main: {} }, vanilla: {} },
  styledLinkLi: { tailwind: { thickSpan: {} }, vanilla: {} },
};

// Content data — pure data, no styling
const NavbarData = {
  name: "Somesh Kumar",
  version: "MK-X",
  navbarLinks: [
    { key: "Home", value: "/" },
    { key: "Projects", value: "/projects" },
    // ...
  ],
};

export { NavbarStyles, NavbarData };
```

### Data/Styling Separation Pattern

The key architectural innovation of this version:

- **`*Data`** objects contain only content: text, URLs, arrays of items
- **`*Styles`** objects contain only Tailwind class modifications: `{ add: [], remove: [] }` per element
- Components receive **both** as separate props, keeping concerns separated
- Styles can target nested components (e.g., `ProjectsStyles.projectCard.mainButton` passes styling to MainButton inside ProjectCard)

---

## Styling Approach

### ModifyClassNames Utility

Enhanced version of v2's `modifyClassNames` with verbose console warnings:

```javascript
ModifyClassNames(defaultClassNames, modifications)
// Warns if defaultClassNames is not an array
// Warns if modifications is not an object
// Warns if both are empty
// Logs when defaultClassNames is empty but remove is provided
```

Same core logic: `Set`-based dedup, remove before add, returns space-joined string.

### Tailwind + Vanilla Dual Styling

Every styling config supports both Tailwind classes and inline styles:

```javascript
{
  tailwind: {
    main: { add: ["rounded-xl", "shadow-lg"], remove: ["border"] }
  },
  vanilla: {
    main: { padding: "1rem" }
  }
}
```

### Per-Card Styling Overrides

Styles can cascade to child components:

```javascript
const ProjectsStyles = {
  projectCard: {
    tailwind: {
      main: { add: ["border", "bg-white", "rounded-xl", "shadow-lg",
               "hover:bg-gray-200", "hover:shadow-xl", "hover:-translate-y-1"] },
      title: { add: ["text-3xl", "font-semibold"] },
    },
    mainButton: {
      tailwind: { main: { remove: ["px-4", "py-2"], add: ["px-2", "py-1", "text-sm"] } }
    }
  }
};
```

---

## Key Features & Unique Aspects

1. **Data/Styling separation** — Clean architecture where content and presentation are fully decoupled
2. **Newest tech stack** — Next.js 15.4.4, React 19.1.0, Tailwind v4 (the most modern stack in any version)
3. **Full home page** — All 6 sections implemented: Navbar, Hero, Projects, Blogs, Now, Footer
4. **New components** (vs v2): `StyledLink`, `Tag`, `QuoteCard`, `NowCards`, `InsertHtml`
5. **Nested styling passthrough** — Parent styles can target child components (e.g., card button styles)
6. **QuoteCard + Footer** — Inspirational quotes section with attribution
7. **InsertHtml** component with dedicated CSS module for rendered HTML content
8. **Hover animations** on ProjectCards — `hover:shadow-xl`, `hover:-translate-y-1`
9. **Animated text gradient** — Hero name uses GIF background with `bg-clip-text` + `text-transparent`
10. **Consistent `tailwind`/`vanilla` dual-mode** styling across all components

---

## Setup & Running

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

---

## Known Limitations

- **Single page only** — No individual project/blog detail pages, no contact, no "now" deep-dive
- **No route groups** — All content on one page (no URL structure for sub-pages)
- **No theming** — No multi-theme support, no dark mode toggle, no cookies
- **No middleware** — No server-side logic
- **No `nextjs-toploader`** — No page transition loading bar
- **`globals.css` is mostly commented out** — Almost all default styles disabled
- **Placeholder content** — Projects 2-5 have generic "Project Two", "Project Three" titles
- **No `[slug]` pages** — Can't navigate to individual project or blog details
- **HTML bio** — Hero description is raw HTML via `InsertHtml` (potential XSS if not sanitized)
- **Console warnings** — `ModifyClassNames` logs verbose warnings during development

---

## Evolution Notes

### What changed from v2
- **Centralized data layer** — `data/` directory with 6 files replacing all inline data
- **Data/styling split** — Each data file exports both `*Data` and `*Styles`
- **All home sections** extracted as proper sectional components under `sectional/Home/`
- **5 new core components:** StyledLink, Tag, QuoteCard, NowCards, InsertHtml
- **Proper metadata:** Title is now "Somesh Kumar - Personal Website"
- **ModifyClassNames upgraded** with verbose logging (PascalCase filename)
- **Nested styling passthrough** — Styles can target child components
- **Next.js** 15.4.1 → 15.4.4

### Relationship to v4 (active site)
- v3 and v4 evolved on **separate branches** with different architectures
- v4 uses **Next.js 14 + React 18** (older stack) but has **more features** (theming, 8 route groups, 8+ pages)
- v3 has the **modern stack** but fewer features (single page, no theming)
- v3's data/styling separation could be considered a cleaner architecture than v4's monolithic `data.js`
- v4's theming engine and multi-page structure could potentially be ported to v3's architecture in a future merge
