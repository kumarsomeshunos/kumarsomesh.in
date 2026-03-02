import ModifyClassNames from "@/utils/styling/ModifyClassNames";

const defaultClassNames = {
  main: ["border", "rounded-full", "mr-2", "px-2", "py-1" , "text-xs"],
};

export default function Tag({ tag, styling, ...extraProps }) {
  return (
    <span
      className={ModifyClassNames(
        defaultClassNames.main,
        styling?.tailwind?.main
      )}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      {tag}
    </span>
  );
}
