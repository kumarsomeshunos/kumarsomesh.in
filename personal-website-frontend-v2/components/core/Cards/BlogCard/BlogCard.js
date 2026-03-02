import Image from "next/image";
import modifyClassNames from "@/utils/styling/modifyClassNames";
import MainButton from "../../Buttons/MainButton/MainButton";

const defaultClassNames = {
    main: [],
    image: [],

}

export default function BlogCard({
  title,
  postedOn,
  tags,
  description,
  thumbnail,
  slug,
  background,
  border,
  boxShadow,
  color,
  borderRadius,
  textDecoration,
  transition,
  backgroundHover,
  borderHover,
  boxShadowHover,
  colorHover,
  borderRadiusHover,
  textDecorationHover,
  transitionHover,
  readMoreLink,
  styling, data, ...extraProps
}) {
  return (
    <article
      className={`${modifyClassNames(defaultClassNames.main, styling?.tailwind?.main) || defaultClassNames.main.join(" ")}`}
      style={styling?.vanilla?.main}
    >
      {thumbnail && (
        <div className={`${modifyClassNames(defaultClassNames.image, styling?.tailwind?.image) || defaultClassNames.image.join(" ")}`} style={styling?.vanilla?.image}>
          <Image
            src={thumbnail}
            width={200}
            height={200}
            alt="Blog Thumbnail"
          />
        </div>
      )}
      <div className={styles.divInfo}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {title && <hr />}
        {postedOn && (
          <div className={styles.divTime}>
            <time className={styles.time} dateTime={postedOn}>
              {postedOn}
            </time>
          </div>
        )}
        {tags && (
          <div className={styles.tags}>
            {tags.map((tag, index) => {
              return (
                <span className={styles.tag} key={index}>
                  {tag.key}
                </span>
              );
            })}
          </div>
        )}
        {description && <p className={styles.description}>{description}</p>}
        {slug && (
          <div className={styles.buttons}>
            <MainButton
              href={`blogs/${slug}`}
              text={readMoreLink.text}
            />
          </div>
        )}
      </div>
    </article>
  );
}