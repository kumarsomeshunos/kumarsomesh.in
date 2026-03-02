import ModifyClassNames from "@/utils/styling/ModifyClassNames";

const defaultClassNames = {
  main: ["relative"],
  wallpaper: ["absolute", "w-full", "h-full", "[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"],
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
      className={ModifyClassNames(
        defaultClassNames.main,
        styling?.tailwind?.main
      )}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      <div
        className={ModifyClassNames(
          defaultClassNames.wallpaper,
          styling?.tailwind?.wallpaper
        )}
        style={styling?.vanilla?.wallpaper}
      ></div>
      <div
        className={ModifyClassNames(
          defaultClassNames.container,
          styling?.tailwind?.container
        )}
        style={styling?.vanilla?.container}
      >
        {children}
      </div>
    </section>
  );
}
