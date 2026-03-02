import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import ModifyClassNames from "@/utils/styling/ModifyClassNames";

const defaultClassNames = {
  main: ["border", "rounded-lg", "p-4", "mr-4"],
  wrapper: ["mb-4"],
  quote: [],
  author: [],
};

export default function QuoteCard({ data, styling, ...extraProps }) {
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
          defaultClassNames.wrapper,
          styling?.tailwind?.wrapper
        )}
        style={styling?.vanilla?.wrapper}
        {...extraProps}
      >
        <p
          className={ModifyClassNames(
            defaultClassNames.quote,
            styling?.tailwind?.quote
          )}
          style={styling?.vanilla?.quote}
        >
          {data.quote}
        </p>
        <p
          className={ModifyClassNames(
            defaultClassNames.author,
            styling?.tailwind?.author
          )}
          style={styling?.vanilla?.author}
        >
          - {data.author}
        </p>
      </div>
      <MainButton data={data.button} styling={styling?.mainButton} />
    </div>
  );
}
