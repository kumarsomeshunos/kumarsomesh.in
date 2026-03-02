import Link from "next/link";
import styles from "./CustomImage.module.css";
import Image from "next/image";

export default function CustomImage({
  srcImage,
  srcMobile,
  altImage,
  widthImage,
  heightImage,
  layoutImage = "responsive",
  objectFitImage = "cover",
  paddingSection = "0",
  positionDiv = "relative",
  widthDiv = "100%",
  heightDiv = "auto",
  borderRadiusDiv = "0px",
  overflowDiv = "hidden",
  boxShadowDiv = "none",
  hrefLink,
  textLink,
  textParagraph,
}) {
  return (
    srcImage &&
    altImage &&
    widthImage &&
    heightImage && (
      <section
        style={{
          padding: paddingSection,
        }}
      >
        <div
          style={{
            position: positionDiv,
            width: widthDiv,
            height: heightDiv,
            borderRadius: borderRadiusDiv,
            overflow: overflowDiv,
            boxShadow: boxShadowDiv,
          }}
        >
          <div className={styles.desktopImage}>
            <Image
              src={srcImage}
              alt={altImage}
              width={widthImage}
              height={heightImage}
              layout={layoutImage}
              objectFit={objectFitImage}
            />
          </div>
          <div className={styles.mobileImage}>
            <Image
              src={srcMobile}
              alt={altImage}
              width={widthImage}
              height={heightImage}
              layout={layoutImage}
              objectFit={objectFitImage}
            />
          </div>
        </div>
        {(textParagraph || (hrefLink && textLink)) && (
          <p className={styles.imageText}>
            {textParagraph || ""}{" "}
            {hrefLink && textLink && (
              <Link href={hrefLink}>[ {textLink} ]</Link>
            )}
          </p>
        )}
      </section>
    )
  );
}