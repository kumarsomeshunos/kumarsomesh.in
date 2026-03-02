# Personal Website Frontend - v1 (CSS-in-JS Experiment)

> **Status:** Archived / Experimental
> **Version Codename:** CSS-in-JS Architecture
> **Stack:** Next.js 15.1.5 | React 19 | Tailwind CSS v3.4 | Turbopack

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
- [Setup and Running](#setup-and-running)
- [Known Limitations](#known-limitations)
- [Evolution Notes](#evolution-notes)

---

## Overview

This is the **earliest architectural experiment** for the personal portfolio website. It explores a **CSS-in-JS approach** where styling is defined as JavaScript objects, converted to CSS strings via a custom `generateCSS` utility, and injected into components via `<style>` tags using `dangerouslySetInnerHTML`.

Only the **Navbar** and **Hero** sections are implemented. This was a proof-of-concept for the styling engine before building out the full site.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 15.1.5 | React framework (App Router) |
| **React** | ^19.0.0 | UI library |
| **Tailwind CSS** | ^3.4.1 | Utility CSS framework |
| **PostCSS** | ^8 | CSS processing |
| **ESLint** | ^9 | Code linting |
| **Turbopack** | Built-in | Dev server bundler (`next dev --turbopack`) |

### Notable Absences
- No `react-masonry-css` (added in later versions)
- No `nextjs-toploader` (added in v4)
- No middleware or theming cookies

---

## Architecture Overview

```
globals.css (CSS Variables for light/dark mode)
       |
       v  provides default values
defaults/styling/core.js + sectional.js
  (JS objects referencing CSS vars + inline CSS)
       |
       v  default styles
utils/styling/deepMerge.js
  (Recursively merges default + overrides)
       |
       v  merged style object
utils/styling/generateCSS.js
  (Converts JS object to CSS string,
   handles media queries + nested selectors)
       |
       v  CSS string
Components
  (Inject CSS via <style dangerouslySetInnerHTML>
   + apply inline styles from merged object)
```

**Flow:**
1. CSS variables defined in `globals.css` (with dark mode overrides via `prefers-color-scheme`)
2. Default styles in `defaults/styling/` reference those CSS variables
3. Components receive optional `styling` prop overrides
4. `deepMerge()` merges defaults with overrides
5. `generateCSS()` converts the `interactive` portion (media queries, pseudo-selectors) into a CSS string
6. Inline styles are applied directly; interactive CSS is injected via `<style>` tags

---

## Project Structure

```
personal-website-frontend-v1/
|-- .git/                           # Git repository
|-- .gitignore
|-- eslint.config.mjs               # ESLint 9 flat config
|-- jsconfig.json                   # Path alias: @/* -> ./*
|-- next.config.mjs                 # Empty config (no remote images)
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs              # Standard Tailwind v3 plugin
|-- README.md                       # This file
|-- tailwind.config.mjs             # ESM export, extends CSS var colors
|
|-- defaults/
|   +-- styling/
|       |-- core.js                 # Default styles: GlobalWrapper,
|       |                           #   SectionWrapper, Hero, TwoPaneLayout,
|       |                           #   MainButton (126 lines)
|       +-- sectional.js            # Default styles: Navbar (sticky,
|                                   #   flex layout, responsive breakpoints)
|
|-- app/
|   |-- favicon.ico
|   |-- globals.css                 # CSS variables, dark mode, link animations,
|   |                               #   hidden scrollbars (~85 lines)
|   |-- layout.js                   # Root layout: Noto Sans font, GlobalWrapper
|   +-- (home)/
|       |-- page.js                 # Home page: renders Navbar + Hero
|       +-- page.module.css
|
|-- components/
|   |-- core/
|   |   |-- Buttons/
|   |   |   +-- MainButton/
|   |   |       |-- MainButton.js
|   |   |       +-- MainButton.module.css
|   |   |-- TwoPaneLayout/
|   |   |   |-- TwoPaneLayout.js    # Two-column responsive layout
|   |   |   +-- TwoPaneLayout.module.css
|   |   +-- Wrappers/
|   |       |-- GlobalWrapper.js    # Root wrapper (bg, color, links)
|   |       |-- GlobalWrapper.module.css
|   |       |-- SectionWrapper.js   # Section-level wrapper
|   |       +-- SectionWrapper.module.css
|   +-- sectional/
|       |-- Hero/
|       |   |-- Hero.js             # Hero section with TwoPaneLayout
|       |   +-- Hero.module.css
|       +-- Navbar/
|           |-- Navbar.js           # Sticky navbar, responsive breakpoints
|           +-- Navbar.module.css
|
|-- utils/
|   +-- styling/
|       |-- deepMerge.js            # Recursive deep merge for style objects
|       +-- generateCSS.js          # JS object -> CSS string converter
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
| `/` | `app/(home)/page.js` | Home page - renders Navbar and Hero only |

This version uses a **single route group** `(home)` with no other pages implemented.

---

## Component Inventory

### Core Components

| Component | Location | Description |
|---|---|---|
| **GlobalWrapper** | `components/core/Wrappers/GlobalWrapper.js` | Root wrapper. Sets background, text color, wallpaper, and link styles. Injects interactive CSS via `<style>`. |
| **SectionWrapper** | `components/core/Wrappers/SectionWrapper.js` | Per-section wrapper with its own background, wallpaper, and container. |
| **TwoPaneLayout** | `components/core/TwoPaneLayout/TwoPaneLayout.js` | Two-column layout (leftPane 65% + rightPane 35%). Right pane hides on screens <=991px. |
| **MainButton** | `components/core/Buttons/MainButton/MainButton.js` | Link-based button with hover animation. White bg -> black bg on hover. |

### Sectional Components

| Component | Location | Description |
|---|---|---|
| **Navbar** | `components/sectional/Navbar/Navbar.js` | Sticky top navigation. Logo + version + nav links. Responsive: hides logo and makes links scrollable on mobile (<=767px). |
| **Hero** | `components/sectional/Hero/Hero.js` | Hero section using TwoPaneLayout. Left: intro text + button. Right: profile image. |

---

## Data Layer

This version has **no centralized data files**. Content is **hardcoded directly in components** and the home page:

- Navbar data (name, version, links) are hardcoded in `Navbar.js`
- Hero content (text, image) is hardcoded in `Hero.js`
- No API integration, no data directory
- Site title: `"kumarsomesh.in"` (set in `layout.js` metadata)

---

## Styling Approach

### CSS Variables

Defined in `globals.css` with light/dark mode support:

```css
:root {
  --default-global-wrapper-main-background: #f5f5f5;
  --default-global-wrapper-main-color: #171717;
  --default-global-wrapper-wallpaper-background: #f5f5f5;
  --default-global-wrapper-wallpaper-filter: blur(5px);
  --default-global-wrapper-interactive-a-bottom-border: 1px dashed #171717;
  --default-global-wrapper-interactive-a-after-background-color: #171717;
}
```

### Default Styling System

The `defaults/styling/` directory contains JS objects that serve as base styles:

- **`core.js`** exports: `defaultGlobalWrapperStyling`, `defaultSectionWrapperStyling`, `defaultHeroStyling`, `defaultTwoPaneLayoutStyling`, `defaultMainButtonStyling`
- **`sectional.js`** exports: `defaultNavbarStyling`

Each default object has:
- **Static properties** (e.g., `main: { background: "var(...)" }`) applied as inline styles
- **`interactive` property** (media queries, pseudo-selectors) converted to CSS via `generateCSS()`

### deepMerge Utility

```javascript
// Recursively merges target (defaults) with source (overrides)
deepMerge(defaultStyles, userOverrides) // returns merged styles object
```

- Deep-merges nested objects
- Scalar values in source override target
- Arrays are replaced (not merged)

### generateCSS Utility

```javascript
// Converts a JS style object into a CSS string
generateCSS(interactive)
// returns "selector { property: value; } @media (...) { ... }"
```

- Handles nested selectors (`.iLeftPane`, `.iRightPane`, etc.)
- Handles `@media` queries with nested selectors inside
- Output is injected via `<style dangerouslySetInnerHTML={{ __html: css }}>`

### Dark Mode

Automatic via CSS `prefers-color-scheme: dark` media query in `globals.css`. All CSS variables are overridden for dark mode. No user toggle, no cookies.

### Link Underline Animation

All `<a>` tags get an animated underline effect via `a::after` pseudo-element with `scaleX` transform on hover.

---

## Key Features

1. **CSS-in-JS without a library** - Custom `generateCSS` + `deepMerge` utilities instead of styled-components/emotion
2. **Composable defaults system** - `defaults/styling/` provides base styles that can be overridden per-instance
3. **Responsive via JS-defined media queries** - Breakpoints defined in JS objects, compiled to CSS strings
4. **System dark mode** - Follows OS preference via `prefers-color-scheme`
5. **Turbopack** enabled for fast dev server
6. **Noto Sans** font via Google Fonts
7. **Link underline animation** - CSS `::after` pseudo-element with `scaleX` transform
8. **Hidden scrollbars** - Cross-browser scrollbar hiding via CSS

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

---

## Known Limitations

- **Only 2 sections implemented:** Navbar and Hero. No Projects, Blogs, Now, Contact, Footer, or any other pages.
- **No remote image configuration** in `next.config.mjs`. Uses `<img>` tags instead of Next.js `<Image>`.
- **No centralized data.** Content is hardcoded in components.
- **No theming system.** Only OS-level dark mode.
- **No middleware or cookies.**
- **`dangerouslySetInnerHTML`** used for style injection. Potential XSS concern if user-generated styles are ever used.
- **CSS-in-JS approach proved complex.** Was abandoned in favor of Tailwind-first approach in v2.
- **Default create-next-app artifacts** remain (public SVGs, favicon).
- **`next.config.mjs` is empty.** No `images.remotePatterns` configuration.

---

## Evolution Notes

### What led to this version
- First attempt at building a personal portfolio from scratch
- Wanted a flexible styling system where components could accept style overrides
- Explored CSS-in-JS as a way to handle responsive design and theming in JS

### What changed in the next version (v2)
- **Dropped CSS-in-JS** entirely. `generateCSS`, `deepMerge`, and `defaults/styling/` were all removed.
- **Adopted Tailwind v4** with a new `modifyClassNames` utility (add/remove class arrays) instead.
- **Dropped the `defaults/` directory.** Styling moved to Tailwind class arrays.
- **Upgraded to Next.js 15.4.1** and React 19.1.
- **Added more components:** ProjectCard, MasonryCardHolder, BlogCard, Heading.
- The CSS-in-JS approach was deemed too verbose and hard to maintain compared to utility-first CSS.
