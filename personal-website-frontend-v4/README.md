# Personal Website Frontend - v4 (Full-Featured Theming Engine)

> **Status:** Active / Production
> **Version Codename:** Cookie-Based Theming Architecture
> **Stack:** Next.js 14.2.5 | React 18 | Tailwind CSS v3.4 | CSS Modules
> **Live URL:** kumarsomesh.com

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
- [Theming System Deep Dive](#theming-system-deep-dive)
- [Content and Projects](#content-and-projects)
- [Key Features](#key-features)
- [Setup and Running](#setup-and-running)
- [Known Limitations and To-Do](#known-limitations-and-to-do)
- [Evolution Notes](#evolution-notes)

---

## Overview

This is the **active, production version** of the personal portfolio website for **Somesh Kumar** (kumarsomesh.com). It features a **cookie-based, server-side theming engine** that powers the entire visual identity of the site, with 8 route groups covering Home, Projects, Blogs, Now, Contact, Updates, Themes, and Test pages.

Despite using an older tech stack (Next.js 14 vs 15 in other versions), this is the **most feature-complete** version with 20+ components, dynamic `[slug]` routes, a masonry card layout, a custom dropdown theme selector, and a comprehensive data architecture.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 14.2.5 | React framework (App Router) |
| **React** | ^18 | UI library |
| **Tailwind CSS** | ^3.4.1 | Utility CSS framework |
| **PostCSS** | ^8 | CSS processing |
| **react-masonry-css** | ^1.0.16 | Masonry grid layout |
| **nextjs-toploader** | ^3.7.15 | Page transition loading bar |
| **Noto Sans** | Google Fonts | Primary typeface (all weights 100-900) |

### Key Differences from v1-v3
- **Older framework** (Next.js 14 vs 15) but **more features**
- **CSS Modules** instead of Tailwind-only styling
- **Cookie-based theming** via middleware + server-side cookies
- **8 route groups** with multiple pages
- **`nextjs-toploader`** for page transitions

---

## Architecture Overview

### Request Flow

```
User Request
  -> Middleware (sets themeName cookie)
  -> Layout.js (reads cookie via baseThemeingEngine)
  -> GlobalWrapper (applies base theme: bg, color, wallpaper)
  -> Page Component (reads section-specific theme data)
  -> Sectional Component (applies themed props)
  -> Core Component (renders with CSS Modules + inline styles)
```

### Theming Flow

```
middleware.js                    user_data/contentData.js
Sets "themeName"                 Defines: navbar, hero,
cookie (default:                 projectsSection, blogsSection,
"plainwhite")                    nowSection, footer
       |                                |
       | cookie value                   | content imports
       v                                v
themeingEngine.js  <--------  data.js
16 theming functions          1525 lines: maps themes to
each reads cookie             {content + style} per section
and returns themed            for "purewhite" and "alldark"
data object
       |
       | themed data
       v
Page Components
Call themeingEngine functions,
pass data to components
```

### Data Flow

```
user_data/contentData.js -> data.js -> themeingEngine.js -> Pages -> Components
(raw content)               (themed    (cookie-based        (async    (render with
                             variants)  resolver)             server    themed props)
                                                              components)
```

---

## Project Structure

```
personal-website-frontend-v4/
|-- .git/                                 # Git repository
|-- .gitignore
|-- data.js                               # Theme data mapping (1525 lines)
|-- jsconfig.json                         # Path alias: @/* -> ./*
|-- middleware.js                          # Cookie middleware (sets themeName)
|-- next.config.mjs                       # Remote images: all hostnames
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs                    # Standard tailwindcss plugin
|-- README.md                             # This file
|-- tailwind.config.js                    # Tailwind v3 config
|-- themeingEngine.js                     # 16 theming engine functions (223 lines)
|
|-- user_data/
|   |-- contentData.js                    # All site content (280 lines)
|   |-- introductionMD.js                 # HTML bio/introduction string
|   +-- navbarLinks.js                    # Navigation links array
|
|-- app/
|   |-- favicon.ico
|   |-- globals.css                       # CSS vars, Tailwind directives,
|   |                                     #   button/card/link styling (135 lines)
|   |-- layout.js                         # Root: Noto Sans, GlobalWrapper,
|   |                                     #   NextTopLoader, baseThemeingEngine
|   |
|   |-- (home)/
|   |   |-- page.js                       # Home: Navbar -> Hero -> Projects ->
|   |   |                                 #   Blogs -> Now -> Footer -> End
|   |   +-- page.module.css
|   |
|   |-- (projects)/
|   |   +-- projects/
|   |       |-- page.js                   # Projects listing page
|   |       |-- page.module.css
|   |       +-- [slug]/
|   |           |-- page.js               # Individual project detail page
|   |           +-- page.module.css
|   |
|   |-- (blogs)/
|   |   +-- blogs/
|   |       |-- page.js                   # Blogs listing page
|   |       |-- page.module.css
|   |       +-- [slug]/
|   |           |-- page.js               # Individual blog detail page
|   |           +-- page.module.css
|   |
|   |-- (now)/
|   |   +-- now/
|   |       |-- page.js                   # "Now" page (what I am doing now)
|   |       +-- page.module.css
|   |
|   |-- (contact)/
|   |   +-- contact/
|   |       |-- page.js                   # Contact page
|   |       +-- page.module.css
|   |
|   |-- (updates)/
|   |   +-- updates/
|   |       |-- page.js                   # Updates/changelog page
|   |       +-- page.module.css
|   |
|   |-- (themes)/
|   |   +-- themes/
|   |       +-- [slug]/
|   |           +-- page.js               # Theme switcher (set cookie by slug)
|   |
|   +-- (test)/
|       +-- test/
|           |-- contentEditor/
|           |   +-- page.js               # Content editor tool
|           |-- editnavbar/
|           |   +-- page.js               # Navbar editor tool
|           |-- form/
|           |   |-- page.js               # Form builder test
|           |   +-- page.module.css
|           |-- form2/
|           |   +-- page.js               # Portfolio builder
|           +-- twoPaneLayout/
|               |-- page.js               # Layout testing page
|               +-- page.module.css
|
|-- components/
|   |-- core/
|   |   |-- Buttons/
|   |   |   +-- MainButton/
|   |   |       |-- MainButton.js
|   |   |       +-- MainButton.module.css
|   |   |-- Cards/
|   |   |   |-- BlogCard/
|   |   |   |   |-- BlogCard.js
|   |   |   |   +-- BlogCard.module.css
|   |   |   |-- FeaturedCard/
|   |   |   |   |-- FeaturedCard.js         # Featured project/blog card
|   |   |   |   +-- FeaturedCard.module.css
|   |   |   |-- MasonryCardHolder/
|   |   |   |   |-- MasonryCardHolder.js
|   |   |   |   +-- MasonryCardHolder.module.css
|   |   |   |-- NowCard/
|   |   |   |   |-- NowCard.js              # "Now" item card
|   |   |   |   +-- NowCard.module.css
|   |   |   |-- ProjectCard/
|   |   |   |   |-- ProjectCard.js
|   |   |   |   +-- ProjectCard.module.css
|   |   |   +-- UpdateCard/
|   |   |       |-- UpdateCard.js           # Updates/changelog entry
|   |   |       +-- UpdateCard.module.css
|   |   |-- CustomImage/
|   |   |   |-- CustomImage.js              # Next.js Image wrapper with fallback
|   |   |   +-- CustomImage.module.css
|   |   |-- Footer/
|   |   |   |-- End.js                      # End-of-page branding section
|   |   |   |-- End.module.css
|   |   |   |-- Footer.js                   # Footer with image + links
|   |   |   +-- Footer.module.css
|   |   |-- Heading/
|   |   |   |-- Heading.js                  # Section heading component
|   |   |   +-- Heading.module.css
|   |   |-- InsertHtml/
|   |   |   |-- InsertHtml.js               # Raw HTML renderer
|   |   |   +-- InsertHtml.module.css
|   |   |-- Navbar/
|   |   |   |-- Dropdown.js                 # Theme selector dropdown
|   |   |   |-- Dropdown.module.css
|   |   |   |-- Navbar.js                   # Main navigation bar
|   |   |   +-- Navbar.module.css
|   |   +-- Wrappers/
|   |       |-- GlobalWrapper.js            # Root wrapper (bg, wallpaper, colors)
|   |       |-- GlobalWrapper.module.css
|   |       |-- SectionWrapper.js           # Section wrapper
|   |       +-- SectionWrapper.module.css
|   |
|   |-- Home/
|   |   |-- Blogs/
|   |   |   |-- Blogs.js                    # Home: blogs preview section
|   |   |   +-- Blogs.module.css
|   |   |-- Hero/
|   |   |   |-- Hero.js                     # Home: hero section
|   |   |   +-- Hero.module.css
|   |   |-- Now/
|   |   |   |-- Now.js                      # Home: now preview section
|   |   |   +-- Now.module.css
|   |   +-- Projects/
|   |       |-- Projects.js                 # Home: projects preview section
|   |       +-- Projects.module.css
|   |
|   |-- Blogs/
|   |   |-- FeaturedBlog/
|   |   |   |-- FeaturedBlog.js             # Blog listing: featured card
|   |   |   +-- FeaturedBlog.module.css
|   |   +-- HeroBlog/
|   |       |-- HeroBlog.js                 # Blog detail: hero header
|   |       +-- HeroBlog.module.css
|   |
|   |-- Projects/
|   |   |-- FeaturedProject/
|   |   |   |-- FeaturedProject.js          # Project listing: featured card
|   |   |   +-- FeaturedProject.module.css
|   |   +-- HeroProject/
|   |       |-- HeroProject.js              # Project detail: hero header
|   |       +-- HeroProject.module.css
|   |
|   |-- Contact/
|   |   +-- HeroContact/
|   |       |-- HeroContact.js              # Contact page: hero header
|   |       +-- HeroContact.module.css
|   |
|   +-- Updates/
|       |-- Updates.js                      # Updates page component
|       +-- Updates.module.css
|
+-- public/
    |-- next.svg
    +-- vercel.svg
```

---

## Pages and Routing

### Route Groups

Next.js App Router **route groups** (parenthesized directories) organize pages without affecting URLs:

| Route Group | URL | Pages | Description |
|---|---|---|---|
| `(home)` | `/` | 1 | Home page with all sections |
| `(projects)` | `/projects`, `/projects/[slug]` | 2 | Projects listing + detail |
| `(blogs)` | `/blogs`, `/blogs/[slug]` | 2 | Blogs listing + detail |
| `(now)` | `/now` | 1 | "Now" page |
| `(contact)` | `/contact` | 1 | Contact page |
| `(updates)` | `/updates` | 1 | Updates/changelog page |
| `(themes)` | `/themes/[slug]` | 1 (dynamic) | Theme switcher |
| `(test)` | `/test/...` | 5 | Dev tools |

**Total: 14+ page routes**

### Dynamic Routes

| Pattern | Purpose |
|---|---|
| `/projects/[slug]` | Individual project detail (e.g., `/projects/the-popcorn-protocol`) |
| `/blogs/[slug]` | Individual blog detail (e.g., `/blogs/faceid-in-manipal-university`) |
| `/themes/[slug]` | Theme switcher (e.g., `/themes/alldark`) |

### Test Routes

| Route | Purpose |
|---|---|
| `/test/contentEditor` | Content editor tool |
| `/test/editnavbar` | Navbar editor tool |
| `/test/form` | Form builder test |
| `/test/form2` | Portfolio builder |
| `/test/twoPaneLayout` | Layout testing page |

---

## Component Inventory

### Core Components (16)

| Component | Files | Description |
|---|---|---|
| **GlobalWrapper** | `.js` + `.module.css` | Root wrapper. Applies theme colors, wallpaper, link styles via CSS variables. |
| **SectionWrapper** | `.js` + `.module.css` | Per-section wrapper with independent wallpaper and styling. |
| **Navbar** | `.js` + `.module.css` | Sticky navigation with name, version, links, and theme Dropdown. |
| **Dropdown** | `.js` + `.module.css` | Theme selector dropdown in Navbar. |
| **Footer** | `.js` + `.module.css` | Footer with background image and quick links. |
| **End** | `.js` + `.module.css` | End-of-page branding/credits section. |
| **MainButton** | `.js` + `.module.css` | Styled link button with hover animations. |
| **Heading** | `.js` + `.module.css` | Section heading with subheading and optional `<hr>`. |
| **ProjectCard** | `.js` + `.module.css` | Project card: title, date, status, description, image, links. |
| **BlogCard** | `.js` + `.module.css` | Blog card: title, date, tags, description. |
| **FeaturedCard** | `.js` + `.module.css` | Large featured card for highlighted projects/blogs. |
| **NowCard** | `.js` + `.module.css` | Card for "now" items (music, media, etc.). |
| **UpdateCard** | `.js` + `.module.css` | Update/changelog entry display card. |
| **MasonryCardHolder** | `.js` + `.module.css` | Masonry grid using `react-masonry-css`. |
| **CustomImage** | `.js` + `.module.css` | Next.js `<Image>` wrapper with fallback handling. |
| **InsertHtml** | `.js` + `.module.css` | Renders raw HTML via `dangerouslySetInnerHTML`. |

### Sectional Components (11)

| Component | Location | Description |
|---|---|---|
| **Home/Hero** | `Home/Hero/` | Hero section with profile image and bio. |
| **Home/Projects** | `Home/Projects/` | Project preview section on home page. |
| **Home/Blogs** | `Home/Blogs/` | Blog preview section on home page. |
| **Home/Now** | `Home/Now/` | "Now" preview section on home page. |
| **FeaturedProject** | `Projects/FeaturedProject/` | Featured project card on projects listing page. |
| **HeroProject** | `Projects/HeroProject/` | Hero header for individual project detail page. |
| **FeaturedBlog** | `Blogs/FeaturedBlog/` | Featured blog card on blogs listing page. |
| **HeroBlog** | `Blogs/HeroBlog/` | Hero header for individual blog detail page. |
| **HeroContact** | `Contact/HeroContact/` | Hero header for contact page. |
| **Updates** | `Updates/` | Updates page component. |

---

## Data Layer

### Content Data (user_data/contentData.js)

Central content repository (280 lines). Exports these objects:

| Export | Content |
|---|---|
| `navbar` | Name (undefined, uses theme default), version "MK-VII", 7 nav links |
| `hero` | Greetings, Unicode styled name, bio HTML, 3 hero buttons, profile image |
| `projectsSection` | 6 projects with titles, dates, statuses, descriptions, images, links, slugs |
| `blogsSection` | 2 blogs with titles, dates, tags, descriptions, thumbnails, slugs |
| `nowSection` | Now Playing data with Spotify/Apple Music links |
| `footer` | Footer image (GIF), quick links (tools + projects) |

### Theme Data (data.js)

Massive 1525-line file that creates **theme variants** for every section. Each section has a `purewhite` and `alldark` variant containing:
- **Styling properties:** `backgroundMain`, `colorMain`, `backgroundWallpaper`, `filterWallpaper`, `linkBorderBottom`, `linkBackgroundColor`
- **Content:** merged from `user_data/contentData.js`

Exported objects: `baseData`, `navbarData`, `heroData`, `featuredProjectData`, `projectsSectionData`, `blogsSectionData`, `featuredBlogData`, `heroProjectData`, `heroBlogData`, `nowSectionData`, `nowMovieData`, `nowBookData`, `heroContactData`, `updatesData`, `footerData`, `endData`

### Theming Engine (themeingEngine.js)

Server-side module (223 lines) that reads the `themeName` cookie and returns the appropriate theme variant:

```javascript
import { cookies } from "next/headers";

function heroThemeingEngine() {
  const themeName = cookies().get("themeName")?.value;
  return heroData[themeName] || heroData["purewhite"];
}
```

**16 exported functions:**
`baseThemeingEngine`, `navbarThemeingEngine`, `footerThemeingEngine`, `endThemeingEngine`, `heroThemeingEngine`, `projectSectionThemeingEngine`, `blogSectionThemeingEngine`, `featuredProjectThemeingEngine`, `featuredBlogThemeingEngine`, `heroBlogThemeingEngine`, `heroProjectThemeingEngine`, `heroContactThemeingEngine`, `nowSectionThemeingEngine`, `nowMovieThemeingEngine`, `nowBookThemeingEngine`, `updatesThemeingEngine`

### Supporting Content Files

| File | Purpose |
|---|---|
| `user_data/introductionMD.js` | HTML string with bio - B.Tech at Manipal University, MERN stack, Java/JS/C/Python, ML |
| `user_data/navbarLinks.js` | Array of {key, value} for Home, Projects, Blogs, Now, Contact, Updates |

---

## Styling Approach

### CSS Modules

Every component has a co-located `.module.css` file. Class names are locally scoped:

```javascript
import styles from './Hero.module.css';
// Usage: <div className={styles.heroContainer}>...</div>
```

### CSS Variables

`globals.css` (135 lines) defines CSS custom properties for buttons, cards, wrappers, and links. These are overridden by the theming engine via inline styles on `GlobalWrapper`. Variables include:
- Button colors, padding, borders, hover states
- Card backgrounds, borders, shadows
- Link border-bottom and background-color
- Wrapper backgrounds and filters

### Tailwind CSS

Tailwind v3 with `@tailwind base/components/utilities` directives. Used alongside CSS Modules. Tailwind handles utility classes while CSS Modules handle component-specific layout.

### Inline Theming

Components receive theme values as props and apply them as inline styles:

```jsx
<div style={{
  background: data.backgroundWallpaper,
  color: data.colorMain,
  filter: data.filterWallpaper,
}}>
```

---

## Theming System Deep Dive

### Available Themes

| Theme Name | Cookie Value | Description |
|---|---|---|
| **Pure White** | `purewhite` | Clean white design. Default fallback. |
| **All Dark** | `alldark` | Black background, white text, yellow accents. |

### Middleware

`middleware.js` runs on **every request** (`/:path*` matcher):

1. Checks for `themeName` cookie
2. If missing, sets it to `"plainwhite"` with options: path="/", httpOnly=false, sameSite="strict"
3. Forwards theme name in `response.headers`

### Engine Functions

Each page calls the relevant theming functions as async server components:

```javascript
// Home page example
const navbarData = navbarThemeingEngine();
const heroData = heroThemeingEngine();
const projectsSectionData = projectSectionThemeingEngine();
const blogsSectionData = blogSectionThemeingEngine();
const nowSectionData = nowSectionThemeingEngine();
const footerData = footerThemeingEngine();
const endData = endThemeingEngine();
// ... pass themed data to components
```

### How to Add a New Theme

1. **Define theme variants** in `data.js` for every section:
   ```javascript
   let baseData = {
     purewhite: { ... },
     alldark: { ... },
     mytheme: {                    // Add new theme here
       backgroundMain: "#...",
       colorMain: "#...",
       backgroundWallpaper: "#...",
       filterWallpaper: "...",
       linkBorderBottom: "...",
       linkBackgroundColor: "#...",
     }
   };
   // Repeat for navbarData, heroData, projectsSectionData, etc.
   ```

2. **Switch theme** by navigating to `/themes/mytheme` or setting the `themeName` cookie to `"mytheme"`

3. **Use the Dropdown** component in the Navbar (if the theme name is added to its options)

---

## Content and Projects

### Projects Featured

| Project | Status | Description |
|---|---|---|
| **The Popcorn Protocol** | In Progress | Movie downloading made accessible |
| **Organized Octopus** | Completed | Bookmark Manager for website collection and sharing |
| **Careers Portal** | Completed | Careers portal for Manipal University |
| **TEDxManipal** | Completed | TEDxManipal event website |
| **EdiImg** | Completed | Image manipulation desktop app (Python) |
| **DoomScroll** | Completed | Instagram Reels-style educational feed (GPT-4 powered) |

### Blogs

| Blog | Date |
|---|---|
| FaceID in Manipal University | 24 October 2024 |
| The $200 DigitalOcean Credits | 13 July 2024 |

### Personal Info
- **Name:** Somesh Kumar (hero displays Unicode styled version)
- **Education:** B.Tech at Manipal University, Jaipur (Information Technology)
- **Skills:** MERN stack, Java, JavaScript, C, Python, Machine Learning
- **Version Badge:** MK-VII

---

## Key Features

1. **Cookie-based theming engine** - Server-side theme resolution via `cookies()` API + middleware
2. **16 theming functions** - Every section has its own themed data resolver
3. **8 route groups** - Full site structure: Home, Projects, Blogs, Now, Contact, Updates, Themes, Test
4. **Dynamic [slug] routes** - Projects, blogs, and themes all support detail pages
5. **NextTopLoader** - Animated loading bar on page transitions
6. **Masonry layout** - `react-masonry-css` for project/blog card grids
7. **Theme dropdown** - Navbar includes a Dropdown component for switching themes
8. **Test/builder tools** - `/test/form2` (Portfolio Builder), `/test/contentEditor`, `/test/editnavbar`
9. **CustomImage** - Next.js Image wrapper with fallback handling
10. **InsertHtml** - Raw HTML rendering for rich-text content
11. **FeaturedCard** - Highlight card for top projects/blogs
12. **End component** - Footer branding/credits section separate from main footer
13. **CSS Modules + Tailwind** - Dual styling approach for scoped + utility styles
14. **Unicode styled name** - Decorative characters in hero section
15. **Noto Sans** - Full weight range (100-900) from Google Fonts
16. **Async server components** - All pages are async, theming resolved server-side

---

## Setup and Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

The site will be available at `http://localhost:3000`.

### Theme Switching

- Visit `http://localhost:3000/themes/alldark` to switch to dark theme
- Visit `http://localhost:3000/themes/purewhite` to switch back
- Or use the Dropdown selector in the Navbar

---

## Known Limitations and To-Do

### Technical Limitations
- **No HTML sanitization.** `InsertHtml` uses `dangerouslySetInnerHTML` without sanitization.
- **Cookie mismatch.** Middleware defaults to `"plainwhite"` but theming engine uses `"purewhite"` as fallback.
- **No Suspense/skeleton screens.** Pages load without loading states.
- **No markdown support.** Content is HTML strings, not markdown.
- **Hardcoded image dimensions.** `CustomImage` has hardcoded width/height values.
- **`data.js` is 1525 lines.** Monolithic theme data file is hard to maintain.
- **No TypeScript.** Entire codebase is plain JavaScript.

### Feature To-Do
- Fallback for masonry layout when JS is disabled
- Separate Tag component
- Font size/weight streamlining
- Mobile views for Now and Footer
- Page banner component
- GitHub data fetching for Updates page
- Suspense loading and skeleton screens
- Dynamic image width/height calculation
- globals.css cleanup (blocking user-defined styles)
- Separate Now cards for songs, movies, TV shows
- Better Dropdown component
- LLM-powered configuration generation
- Markdown + HTML support
- College tools page (notes, PDF edit, handwriting)
- Fix breakpoints for each page and section
- Update Dropdown component to be more dynamic
- Update contacts and updates page to be dynamic
- Build separate Now cards for different media types

---

## Evolution Notes

### Why this version exists alongside v1-v3
- v1-v3 experimented with different **styling architectures** (CSS-in-JS -> Tailwind classes -> data/styling separation) on **newer stacks** (Next 15, React 19)
- v4 was developed **in parallel** with the focus on **shipping features**: theming, multi-page routing, full content
- v4's architecture prioritizes **completeness** over architectural elegance
- The `data.js` monolith is acknowledged as a maintenance burden but enabled rapid theme development

### Version Comparison

| Feature | v1 | v2 | v3 | **v4** |
|---|---|---|---|---|
| Next.js | 15.1.5 | 15.4.1 | 15.4.4 | **14.2.5** |
| React | 19 | 19.1 | 19.1 | **18** |
| Tailwind | v3 | v4 | v4 | **v3** |
| Styling | CSS-in-JS | Tailwind classes | Tailwind + data/styling | **CSS Modules + Tailwind** |
| Theming | None | None | None | **Cookie-based (2 themes)** |
| Pages | 1 | 1 | 1 | **14+** |
| Components | 6 | 8 | 18 | **27** |
| Data layer | Hardcoded | Inline | data/ directory | **user_data/ + data.js** |
| Middleware | No | No | No | **Yes** |

### Potential Future Direction
- Merge v3's clean data/styling separation with v4's feature set
- Upgrade to Next.js 15 and Tailwind v4
- Replace data.js monolith with per-section data files (like v3's data/ directory)
- Add TypeScript
- Implement markdown support for content
- Add API-driven content (CMS or GitHub)
