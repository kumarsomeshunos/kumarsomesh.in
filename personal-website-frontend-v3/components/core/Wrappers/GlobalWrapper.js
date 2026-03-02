import ModifyClassNames from "@/utils/styling/ModifyClassNames";

const defaultClassNames = {
  main: ["relative"],
  wallpaper: ["absolute", "w-full", "h-full"],
  container: [],
};

export default function GlobalWrapper({ children, styling, ...extraProps }) {
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
