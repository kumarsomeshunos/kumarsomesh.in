import styles from "./ProjectCard.module.css";
import MainButton from "../../Buttons/MainButton/MainButton";
import Image from "next/image";

export default function ProjectCard({
  title,
  postedOn,
  status,
  subtitle,
  description,
  links,
  src,
  slug,
  details,
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
}) {
  return (
    <article
      className={styles.main}
      style={{
        "--defalut-backgroundProjectCard": background,
        "--deafult-borderProjectCard": border,
        "--default-box-shadowProjectCard": boxShadow,
        "--default-colorProjectCard": color,
        "--default-borderRadiusProjectCard": borderRadius,
        "--default-textDecorationProjectCard": textDecoration,
        "--default-transitionProjectCard": transition,
        "--defalut-backgroundProjectCardHover": backgroundHover,
        "--deafult-borderProjectCardHover": borderHover,
        "--default-box-shadowProjectCardHover": boxShadowHover,
        "--default-colorProjectCardHover": colorHover,
        "--default-borderRadiusProjectCardHover": borderRadiusHover,
        "--default-textDecorationProjectCardHover": textDecorationHover,
        "--default-transitionProjectCardHover": transitionHover,
      }}
    >
      <div className={styles.wrapper}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {title && <hr />}
        {(postedOn || status) && (
          <div className={styles.timeAndStatus}>
            {postedOn && (
              <time className={styles.time} dateTime={postedOn}>
                {postedOn}
              </time>
            )}
            {status && status.toLowerCase() == "completed" ? (
              <span className={styles.statusGreen}>{status}</span>
            ) : (
              <span className={styles.statusOrange}>{status}</span>
            )}
          </div>
        )}
        {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
        {description && <p className={styles.description}>{description}</p>}
        {(links || details) && (
          <div className={styles.buttons}>
            {links &&
              links.map((link, index) => {
                return (
                  <MainButton
                    key={index}
                    text={link.key}
                    href={link.value}
                    background={link.background}
                    border={link.border}
                    boxShadow={link.boxShadow}
                    color={link.color}
                    padding={link.padding}
                    margin={link.margin}
                    borderRadius={link.borderRadius}
                    textDecoration={link.textDecoration}
                    transition={link.transition}
                    backgroundHover={link.backgroundHover}
                    borderHover={link.borderHover}
                    boxShadowHover={link.boxShadowHover}
                    colorHover={link.colorHover}
                    paddingHover={link.paddingHover}
                    marginHover={link.marginHover}
                    borderRadiusHover={link.borderRadiusHover}
                    textDecorationHover={link.textDecorationHover}
                    transitionHover={link.transitionHover}
                  />
                );
              })}
            {details && (
              <MainButton
                key={99}
                text={"Read More"}
                href={`projects/${slug}`}
                background={details.background}
                    border={details.border}
                    boxShadow={details.boxShadow}
                    color={details.color}
                    padding={details.padding}
                    margin={details.margin}
                    borderRadius={details.borderRadius}
                    textDecoration={details.textDecoration}
                    transition={details.transition}
                    backgroundHover={details.backgroundHover}
                    borderHover={details.borderHover}
                    boxShadowHover={details.boxShadowHover}
                    colorHover={details.colorHover}
                    paddingHover={details.paddingHover}
                    marginHover={details.marginHover}
                    borderRadiusHover={details.borderRadiusHover}
                    textDecorationHover={details.textDecorationHover}
                    transitionHover={details.transitionHover}
              />
            )}
          </div>
        )}
        {src && (
          <div className={styles.image}>
            <Image src={src} width={400} height={200} alt="Project Thumbnail" />
          </div>
        )}
      </div>
    </article>
  );
}
