// export default function generateCSS(stylesObject) {
//   return Object.entries(stylesObject)
//     .map(([selector, styles]) => {
//       const properties = Object.entries(styles)
//         .map(([property, value]) => `${property}: ${value};`)
//         .join(" ");
//       return `${selector} { ${properties} }`;
//     })
//     .join(" ");
// }

export default function generateCSS(interactive) {
  function processStyles(styles) {
    return Object.entries(styles)
      .map(([selectorOrMedia, value]) => {
        if (typeof value === "object") {
          if (selectorOrMedia.startsWith("@media")) {
            // Handle media queries
            return `${selectorOrMedia} { ${processStyles(value)} }`;
          } else {
            // Handle regular selectors
            const properties = Object.entries(value)
              .map(([property, propValue]) => `${property}: ${propValue};`)
              .join(" ");
            return `${selectorOrMedia} { ${properties} }`;
          }
        }
        return ""; // In case of unexpected non-object value
      })
      .join(" ");
  }

  return processStyles(interactive);
}
