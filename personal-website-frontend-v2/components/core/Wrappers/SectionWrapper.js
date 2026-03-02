import modifyClassNames from "@/utils/styling/modifyClassNames";

const defaultClassNames = {
  main: ["relative"],
  wallpaper: ["absolute", "w-full", "h-full"],
  container: [
    "relative",
    "mx-auto",
    "max-w-[85%]",
    "sm:max-w-[80%]",
    "md:max-w-[75%]",
    "lg:max-w-[70%]",
    "xl:max-w-7xl",
  ],
};

export default function SectionWrapper({ children, styling, ...extraProps }) {
  return (
    <section
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
            defaultClassNames.wallpaper,
            styling?.tailwind?.wallpaper
          ) || defaultClassNames.wallpaper.join(" ")
        }`}
        style={styling?.vanilla?.wallpaper}
      ></div>
      <div
        className={`${
          modifyClassNames(
            defaultClassNames.container,
            styling?.tailwind?.container
          ) || defaultClassNames.container.join(" ")
        }`}
        style={styling?.vanilla?.container}
      >
        {children}
      </div>
    </section>
  );
}
