import Image from "next/image";

import ModifyClassNames from "@/utils/styling/ModifyClassNames";
import MainButton from "../../Buttons/MainButton/MainButton";

const defaultClassNames = {
  main: ["border", "rounded-lg", "mb-4", "p-4"],
  content: [],
  title: [],
  subtitle: [],
  dateAndStatus: ["flex", "justify-between", "items-center"],
  status: [],
  date: [],
  description: [],
  links: [],
  image: ["rounded-lg"],
};

export default function ProjectCard({ data, styling, ...extraProps }) {
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
          defaultClassNames.content,
          styling?.tailwind?.content
        )}
        style={styling?.vanilla?.content}
      >
        <h2
          className={ModifyClassNames(
            defaultClassNames.title,
            styling?.tailwind?.title
          )}
          style={defaultClassNames?.vanilla?.title}
        >
          {data.title}
        </h2>
        <h3
          className={ModifyClassNames(
            defaultClassNames.subtitle,
            styling?.tailwind?.subtitle
          )}
          style={defaultClassNames?.vanilla?.subtitle}
        >
          {data.subtitle}
        </h3>
        <div
          className={ModifyClassNames(
            defaultClassNames.dateAndStatus,
            styling?.tailwind?.dateAndStatus
          )}
          style={defaultClassNames?.vanilla?.dateAndStatus}
        >
          <p
            className={ModifyClassNames(
              defaultClassNames.date,
              styling?.tailwind?.date
            )}
            style={defaultClassNames?.vanilla?.date}
          >
            {data.date}
          </p>
          <p
            className={ModifyClassNames(
              defaultClassNames.status,
              styling?.tailwind?.status
            )}
            style={defaultClassNames?.vanilla?.status}
          >
            {data.status}
          </p>
        </div>
        <p
          className={ModifyClassNames(
            defaultClassNames.description,
            styling?.tailwind?.description
          )}
          style={defaultClassNames?.vanilla?.description}
        >
          {data.description}
        </p>

        <div
          className={ModifyClassNames(
            defaultClassNames.links,
            styling?.tailwind?.links
          )}
          style={defaultClassNames?.vanilla?.links}
        >
          {data.links.map((link, index) => {
            return (
              <MainButton
                key={index}
                data={link}
                styling={styling?.mainButton}
              />
            );
          })}
        </div>
      </div>
      {data.image && (
        <Image
          className={ModifyClassNames(
            defaultClassNames.image,
            styling?.tailwind?.image
          )}
          style={styling?.vanilla?.image}
          src={data.image}
          width={600}
          height={200}
          alt="Project Image"
        />
      )}
    </div>
  );
}
