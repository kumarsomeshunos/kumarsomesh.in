import ModifyClassNames from "@/utils/styling/ModifyClassNames";

const defaultClassNames = {
  main: ["py-6"],
  heading: [
    "text-[300%]",
    "bg-clip-text",
    "text-transparent",
    "bg-[length:100%]",
    "bg-[url('https://cdn.dribbble.com/users/4025749/screenshots/7319596/media/e8e15b54c947cdc39e9abe93a9080e73.gif')]",
  ],
  subheading: [],
  hr: [],
};

export default function Heading({ data, styling, ...extraProps }) {
  return (
    (data.heading || data.subheading) && (
      <section
        className={ModifyClassNames(
          defaultClassNames.main,
          styling?.tailwind?.main
        )}
        style={styling?.vanilla?.main}
        {...extraProps}
      >
        {data.heading && (
          <h1
            className={ModifyClassNames(
              defaultClassNames.heading,
              styling?.tailwind?.heading
            )}
            style={styling?.vanilla?.heading}
          >
            {data.heading}
          </h1>
        )}
        {data.subheading && (
          <p
            className={ModifyClassNames(
              defaultClassNames.subheading,
              styling?.tailwind?.subheading
            )}
            style={styling?.vanilla?.subheading}
          >
            {data.subheading}
          </p>
        )}
        {data.hr && (
          <hr
            className={ModifyClassNames(
              defaultClassNames.hr,
              styling?.tailwind?.hr
            )}
            style={styling?.vanilla?.hr}
          />
        )}
      </section>
    )
  );
}
