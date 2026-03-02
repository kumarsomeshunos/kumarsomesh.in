import Image from "next/image";

import ModifyClassNames from "@/utils/styling/ModifyClassNames";
import MainButton from "../../Buttons/MainButton/MainButton";
import Tag from "../../Tag/Tag";

const defaultClassNames = {
  main: ["border", "rounded-lg", "mb-4", "p-4"],
  content: [],
  title: [],
  subtitle: [],
  date: [],
  description: [],
  tags: [],
  image: ["rounded-lg"],
};

export default function BlogCard({ data, styling, ...extraProps }) {
  return (
    <div
      className={ModifyClassNames(
        defaultClassNames.main,
        styling?.tailwind?.main
      )}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      {data.image && (
        <Image
        className={ModifyClassNames(
          defaultClassNames.image,
          styling?.tailwind?.image
        )}
        style={styling?.vanilla?.image}
        src={
          "https://alpha.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2FZvflQbVsGrYSwGdk_image.webp&w=1920&q=75"
        }
        width={600}
        height={200}
        alt="Blog Image"
      />
      )}
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
          style={styling?.vanilla?.title}
        >
          {data.title}
        </h2>
        <h3
          className={ModifyClassNames(
            defaultClassNames.subtitle,
            styling?.tailwind?.subtitle
          )}
          style={styling?.vanilla?.subtitle}
        >
          {data.subtitle}
        </h3>
        <p
          className={ModifyClassNames(
            defaultClassNames.date,
            styling?.tailwind?.date
          )}
          style={styling?.vanilla?.date}
        >
          {data.date}
        </p>
        <div
          className={ModifyClassNames(
            defaultClassNames.tags,
            styling?.tailwind?.tags
          )}
          style={styling?.vanilla?.tags}
        >
          {data.tags.map((tag, index) => {
            return <Tag key={index} tag={tag} styling={styling?.tag} />;
          })}
        </div>
        <p
          className={ModifyClassNames(
            defaultClassNames.description,
            styling?.tailwind?.description
          )}
          style={styling?.vanilla?.description}
        >
          {data.description}
        </p>
        <MainButton
          data={{ text: "Read More", link: "/" }}
          styling={styling?.mainButton}
        />
      </div>
    </div>
  );
}
