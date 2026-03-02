import ModifyClassNames from "@/utils/styling/ModifyClassNames";

const defaultClassNames = {
  main: ["flex", "flex-col", "items-center", "md:flex-row"],
  left: ["w-full", "mr-0", "md:mr-4", "md:w-[75%]"],
  right: ["w-0", "md:w-[25%]"],
};

export default function TwoPaneLayout({ left, right, styling, ...extraProps }) {
  return (
    <div
      className={ModifyClassNames(
        defaultClassNames.main,
        styling?.tailwind?.main
      )}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      <div
        className={ModifyClassNames(
          defaultClassNames.left,
          styling?.tailwind?.left
        )}
        style={styling?.vanilla?.left}
      >
        {left}
      </div>
      <div
        className={ModifyClassNames(
          defaultClassNames.right,
          styling?.tailwind?.right
        )}
        style={styling?.vanilla?.right}
      >
        {right}
      </div>
    </div>
  );
}
