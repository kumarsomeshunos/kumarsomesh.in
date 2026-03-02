import modifyClassNames from "@/utils/styling/modifyClassNames";
import MainButton from "../../Buttons/MainButton/MainButton";
import Image from "next/image";

const defaultClassNames = {
  main: [
  "mt-4",
  "w-full",
  "bg-black",
  "border",
  "border-gray-200",
  "shadow-md",
  "text-white",
  "rounded-lg",
  "no-underline",
  "transition-all",
  "duration-300",
  "ease-in-out",
  "hover:bg-gray-100",
  "hover:border-gray-400",
  "hover:shadow-lg",
  "hover:text-black",
  "hover:rounded-xl",
  "hover:transition-all",
  "hover:duration-300",
  "hover:ease-in-out"
],
  wrapper: ["p-4"],
  title: ["text-[200%]", "font-medium", "pb-2"],
  timeAndStatus: ["flex", "flex-wrap", "justify-between", "my-4"],
  time: ["text-gray-500"],
  status: [],
  subtitle: ["text-[130%]", "font-medium", "my-2"],
  description: [],
  buttons: ["flex", "justify-start", "flex-wrap"],
  image: ["border", "border-gray-200", "rounded-lg", "overflow-hidden", "mt-4"],
};

export default function ProjectCard({ styling, data, ...extraProps }) {
  return (
    <article
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
            defaultClassNames.wrapper,
            styling?.tailwind?.wrapper
          ) || defaultClassNames.wrapper.join(" ")
        }`}
        style={styling?.vanilla?.wrapper}
      >
        {data.title && (
          <h3
            className={`${
              modifyClassNames(
                defaultClassNames.title,
                styling?.tailwind?.title
              ) || defaultClassNames.title.join(" ")
            }`}
            style={styling?.vanilla?.title}
          >
            {data.title}
          </h3>
        )}
        {/* {data.title && <hr />} */}
        {(data.postedOn || data.status) && (
          <div
            className={`${
              modifyClassNames(
                defaultClassNames.timeAndStatus,
                styling?.tailwind?.timeAndStatus
              ) || defaultClassNames.timeAndStatus.join(" ")
            }`}
            style={styling?.vanilla?.timeAndStatus}
          >
            {data.postedOn && (
              <time
                className={`${
                  modifyClassNames(
                    defaultClassNames.time,
                    styling?.tailwind?.time
                  ) || defaultClassNames.time.join(" ")
                }`}
                dateTime={data.postedOn}
                style={styling?.vanilla?.time}
              >
                {data.postedOn}
              </time>
            )}
            {data.status && data.status.toLowerCase() == "completed" ? (
              <span
                className={`${
                  modifyClassNames(
                    defaultClassNames.status,
                    styling?.tailwind?.status
                  ) || defaultClassNames.status.join(" ")
                }`}
                style={styling?.vanilla?.status}
              >
                {data.status}
              </span>
            ) : (
              <span
                className={`${
                  modifyClassNames(
                    defaultClassNames.status,
                    styling?.tailwind?.status
                  ) || defaultClassNames.status.join(" ")
                }`}
                style={styling?.vanilla?.status}
              >
                {data.status}
              </span>
            )}
          </div>
        )}
        {data.subtitle && (
          <h4
            className={`${
              modifyClassNames(
                defaultClassNames.subtitle,
                styling?.tailwind?.subtitle
              ) || defaultClassNames.subtitle.join(" ")
            }`}
            style={styling?.vanilla?.subtitle}
          >
            {data.subtitle}
          </h4>
        )}
        {data.description && (
          <p
            className={`${
              modifyClassNames(
                defaultClassNames.description,
                styling?.tailwind?.description
              ) || defaultClassNames.description.join(" ")
            }`}
            style={styling?.vanilla?.description}
          >
            {data.description}
          </p>
        )}
        {(data.links || data.details) && (
          <div
            className={`${
              modifyClassNames(
                defaultClassNames.buttons,
                styling?.tailwind?.buttons
              ) || defaultClassNames.buttons.join(" ")
            }`}
            style={styling?.vanilla?.buttons}
          >
            {data.links &&
              data.links.map((link, index) => {
                return <MainButton key={index} data={{text: "Projects", value: "/"}} styling={{tailwind: {
                    main: {
                        add: ["mr-2", "px-4", "border", "rounded-full", "mt-4", "border-gray-300"],
                        remove: ["px-4", "py-2", "mt-4", "mr-4", "hover:px-4", "hover:py-2", "hover:mt-4", "hover:mr-4"]
                    }
                }}} />;
              })}
            {data.details && (
              <MainButton key={0} data={{text: "Read More", value: "/"}} styling={{tailwind: {
                    main: {
                        add: ["mr-2", "px-4", "border", "rounded-full", "mt-4"],
                        remove: ["px-4", "py-2", "mt-4", "mr-4", "hover:px-4", "hover:py-2", "hover:mt-4", "hover:mr-4"]
                    }
                }}}/>
            )}
          </div>
        )}
        {data.src && (
          <div
            className={`${
              modifyClassNames(
                defaultClassNames.image,
                styling?.tailwind?.image
              ) || defaultClassNames.image.join(" ")
            }`}
            style={styling?.vanilla?.image}
          >
            <Image
              src={data.src}
              width={400}
              height={200}
              alt="Project Thumbnail"
            />
          </div>
        )}
      </div>
    </article>
  );
}
