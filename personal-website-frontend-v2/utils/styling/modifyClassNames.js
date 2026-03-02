// TODO
// Better error handling and validation
// Add support for comma seperated class names too

export default function modifyClassNames(defaultClassNames, modifications) {
  if (!Array.isArray(defaultClassNames)) {
    defaultClassNames = [];
  }

  const classSet = new Set(
    defaultClassNames.filter(
      (name) => typeof name === "string" && name.trim() !== ""
    )
  );

  if (typeof modifications !== "object" || modifications === null) {
    return Array.from(classSet).join(" ");
  }

  if (modifications.remove) {
    if (Array.isArray(modifications.remove)) {
      modifications.remove.forEach((className) => {
        if (typeof className === "string" && className.trim() !== "") {
          classSet.delete(className.trim());
        }
      });
    }
  }

  if (modifications.add) {
    if (Array.isArray(modifications.add)) {
      modifications.add.forEach((className) => {
        if (typeof className === "string" && className.trim() !== "") {
          classSet.add(className.trim());
        }
      });
    }
  }

  return Array.from(classSet).filter(Boolean).join(" ");
}
