# GlobalWrapper Component Documentation

The `GlobalWrapper` provides a flexible, customizable layout wrapper for your app or page sections, supporting Tailwind class and inline style overrides for its main, wallpaper, and container elements.

---

## Core Structure (Skeleton)

| Element   | Tag      | Class Source                |
|-----------|----------|----------------------------|
| Main      | section  | `className` from `styling.tailwind.main` |
| Wallpaper | div      | `className` from `styling.tailwind.wallpaper` |
| Container | div      | `className` from `styling.tailwind.container` |

---

## Default Class Names

- **main:** `relative`
- **wallpaper:** `absolute w-full h-full`
- **container:** *(none by default)*

---

## Props

| Prop         | Type     | Description                                                                                 | Default Value                |
|--------------|----------|---------------------------------------------------------------------------------------------|------------------------------|
| children     | node     | React children to render inside the container div.                                           | —                            |
| styling      | object   | Custom styling object to override Tailwind classes and inline styles for each section.       | `{}`                         |
| extraProps   | object   | Any additional props are spread onto the root `<section>`.                                  | —                            |

### `styling.tailwind` Structure

Each key (`main`, `wallpaper`, `container`) accepts an object:

```js
styling: {
  tailwind: {
    main: { add: [/* classes */], remove: [/* classes */] },
# GlobalWrapper Component

`GlobalWrapper` is a flexible layout wrapper for your app or page sections, supporting Tailwind and inline style overrides for its main, wallpaper, and container elements.

---

## Structure (Nesting)

```
section (main)
  ├─ div (wallpaper)
  └─ div (container)
        └─ {children}
```

---

## Default Class Names

- main: `relative`
- wallpaper: `absolute w-full h-full`
- container: *(none by default)*

---

## Props & Styling

- **children**: React nodes inside the container div.
- **styling**: Optional object to override Tailwind classes and inline styles for each section.
  - `tailwind`: `{ main, wallpaper, container }` each as `{ add: [], remove: [] }` arrays.
  - `vanilla`: `{ main, wallpaper, container }` as style objects.
- **...extraProps**: Spread onto the root `<section>`.

---

## Examples

```jsx
<GlobalWrapper>
  <h1>Hello World</h1>
</GlobalWrapper>

<GlobalWrapper styling={{
  tailwind: {
    main: { add: ["bg-gray-100"], remove: ["relative"] },
    wallpaper: { add: ["bg-gradient-to-br"] },
    container: { add: ["p-8"] }
  }
}}>
  <p>Custom content</p>
</GlobalWrapper>
```

---

## Notes
- Use `add`/`remove` arrays in `styling.tailwind` to modify default classes.
- All other props are passed to the root `<section>`.
    wallpaper: ["custom", "tailwind", "classes"],
    container: ["custom", "tailwind", "classes"]
  },
  vanilla: {
    main: { /* inline CSS */ },
    wallpaper: { /* inline CSS */ },
    container: { /* inline CSS */ }
  }
}
```

- All keys are optional. If not provided, defaults are used.
- `tailwind` keys accept arrays of class names.
- `vanilla` keys accept style objects.

---

## Usage Examples

### Basic Usage

```jsx
<GlobalWrapper>
  <h1>Hello World</h1>
</GlobalWrapper>
```

### With Custom Tailwind Classes

```jsx
<GlobalWrapper
  styling={{
    tailwind: {
      main: ["bg-gray-100", "min-h-screen"],
      wallpaper: ["bg-gradient-to-br", "from-blue-200", "to-purple-300"],
      container: ["p-8", "rounded-lg"]
    }
  }}
>
  <p>Custom styled content</p>
</GlobalWrapper>
```

### With Inline Styles

```jsx
<GlobalWrapper
  styling={{
    vanilla: {
      main: { backgroundColor: "#fafafa" },
      wallpaper: { opacity: 0.2 },
      container: { maxWidth: 800, margin: "0 auto" }
    }
  }}
>
  <p>Content with inline styles</p>
</GlobalWrapper>
```

---

## Notes
- The `modifyClassNames` utility merges default and custom class names.
- You can override or extend any section's classes or styles via the `styling` prop.
- All other props are passed to the root `<section>` (e.g., `id`, `data-*`, etc.).

---

## When to Use
Use `GlobalWrapper` when you need a consistent, customizable layout wrapper for your app or page sections, with easy support for both Tailwind and inline styles.
