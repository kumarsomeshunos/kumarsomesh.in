import modifyClassNames from "@/utils/styling/modifyClassNames";

const defaultClassNames = {
  main: ["flex", "flex-col", "items-center", "md:flex-row"],
  leftPane: ["w-full", "mr-0", "md:mr-4", "md:w-[75%]"],
  rightPane: ["w-0", "md:w-[25%]"],
};

export default function TwoPaneLayout({
  styling,
  leftContent,
  rightContent,
  ...extraProps
}) {
  return (
    <div
      className={`${
        modifyClassNames(defaultClassNames.main, styling?.tailwind?.main) ||
        defaultClassNames.main.join(" ")
      }`}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      <div
        className={`${
          modifyClassNames(
            defaultClassNames.leftPane,
            styling?.tailwind?.leftPane
          ) || defaultClassNames.leftPane.join(" ")
        }`}
        style={styling?.vanilla?.leftPane}
      >
        {leftContent}
      </div>
      <div
        className={`${
          modifyClassNames(
            defaultClassNames.rightPane,
            styling?.tailwind?.rightPane
          ) || defaultClassNames.rightPane.join(" ")
        }`}
        style={styling?.vanilla?.rightPane}
      >
        {rightContent}
      </div>
    </div>
  );
}
