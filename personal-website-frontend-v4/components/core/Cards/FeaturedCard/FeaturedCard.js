import styles from "./FeaturedCard.module.css";
import MainButton from "../../Buttons/MainButton/MainButton";
import CustomImage from "../../CustomImage/CustomImage";

export default function FeaturedCard({
  imageSrc,
  imageSrcMobile,
  imageAlt,
  imageWidth,
  imageHeight,
  layoutImage,
  objectFitImage,
  paddingSection,
  positionDiv,
  widthDiv,
  heightDiv,
  borderRadiusDiv,
  overflowDiv,
  boxShadowDiv,
  hrefLink,
  textLink,
  textParagraph,
  title,
  buttons,
  border = "var(--deafult-borderProjectCard)",
}) {
  return (
    <article className={styles.main}>
      <div
        className={styles.wrapper}
        style={{
          border: border,
        }}
      >
        <CustomImage
          srcImage={imageSrc}
          srcMobile={imageSrcMobile}
          altImage={imageAlt}
          widthImage={imageWidth}
          heightImage={imageHeight}
          layoutImage={layoutImage}
          objectFitImage={objectFitImage}
          paddingSection={paddingSection}
          positionDiv={positionDiv}
          widthDiv={widthDiv}
          heightDiv={heightDiv}
          borderRadiusDiv={borderRadiusDiv}
          overflowDiv={overflowDiv}
          boxShadowDiv={boxShadowDiv}
          hrefLink={hrefLink}
          textLink={textLink}
          textParagraph={textParagraph}
        />

        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.buttons}>
            {buttons.map((button, index) => {
              return (
                <MainButton
                  key={index}
                  href={button.value}
                  text={button.key}
                  background={button.background}
                  border={button.border}
                  boxShadow={button.boxShadow}
                  color={button.color}
                  padding={button.padding}
                  margin={button.margin}
                  borderRadius={button.borderRadius}
                  textDecoration={button.textDecoration}
                  transition={button.transition}
                  backgroundHover={button.backgroundHover}
                  borderHover={button.borderHover}
                  boxShadowHover={button.boxShadowHover}
                  colorHover={button.colorHover}
                  paddingHover={button.paddingHover}
                  marginHover={button.marginHover}
                  borderRadiusHover={button.borderRadiusHover}
                  textDecorationHover={button.textDecorationHover}
                  transitionHover={button.transitionHover}
                />
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
