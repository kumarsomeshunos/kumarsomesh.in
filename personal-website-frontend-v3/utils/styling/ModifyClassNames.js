export default function ModifyClassNames(defaultClassNames, modifications) {
    if (!Array.isArray(defaultClassNames)) {
        console.warn("Warning: defaultClassNames should be an array. Received:", defaultClassNames);
        console.log("Setting defaultClassNames to an empty array.");
        defaultClassNames = [];
    }

    if (typeof modifications !== "object" || modifications === null) {
        console.warn("Warning: modifications should be an object. Received:", modifications);
        console.log("Setting modifications to an empty object.");
        modifications = {};
    }

    const classSet = new Set(
        defaultClassNames.filter((className) => typeof className === "string" && className.trim() !== "")
    );

    const isDefaultClassNamesEmpty = defaultClassNames.length === 0;
    const isModificationsEmpty = Object.keys(modifications).length === 0;

    if (isDefaultClassNamesEmpty && isModificationsEmpty) {
        console.warn("Warning: Both defaultClassNames and modifications are empty. Returning an empty string.");
        return "";
    }

    if (!isDefaultClassNamesEmpty && modifications.remove && Array.isArray(modifications.remove)) {
        modifications.remove.forEach((className) => {
            if (typeof className === "string" && className.trim() !== "") {
                classSet.delete(className.trim());
            }
        });
    } else if (isDefaultClassNamesEmpty && modifications.remove) {
        console.log("defaultClassNames is empty, but modifications contain a 'remove' key. Ignoring it.");
    }


    if (modifications.add && Array.isArray(modifications.add)) {
        modifications.add.forEach((className) => {
            if (typeof className === "string" && className.trim() !== "") {
                classSet.add(className.trim());
            }
        });
    }

    return Array.from(classSet).filter(Boolean).join(" ");
}