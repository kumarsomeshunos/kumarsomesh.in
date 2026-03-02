import modifyClassNames from "@/utils/styling/modifyClassNames";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

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

export default function Heading({ styling, data, ...extraProps }) {
  return (
    (data.heading || data.subheading) && (
      <section
        className={`${
          modifyClassNames(defaultClassNames.main, styling?.tailwind?.main) ||
          defaultClassNames.main.join(" ")
        }`}
        style={styling?.vanilla?.main}
        {...extraProps}
      >
        {data.heading && (
          <h1
            className={`${
              modifyClassNames(
                defaultClassNames.heading,
                styling?.tailwind?.heading
              ) || defaultClassNames.heading.join(" ")
            } ${ubuntu.className}`}
            style={styling?.vanilla?.heading}
          >
            {data.heading}
          </h1>
        )}
        {data.subheading && (
          <p
            className={`${
              modifyClassNames(
                defaultClassNames.subheading,
                styling?.tailwind?.subheading
              ) || defaultClassNames.subheading.join(" ")
            }`}
            style={styling?.vanilla?.subheading}
          >
            {data.subheading}
          </p>
        )}
        {data.hr && (
          <hr
            className={`${
              modifyClassNames(defaultClassNames.hr, styling?.tailwind?.hr) ||
              defaultClassNames.hr.join(" ")
            }`}
            style={styling?.vanilla?.hr}
          />
        )}
      </section>
    )
  );
}
