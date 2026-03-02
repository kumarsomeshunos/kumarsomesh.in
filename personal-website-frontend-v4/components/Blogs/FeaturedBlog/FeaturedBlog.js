import styles from "./FeaturedBlog.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import FeaturedCard from "@/components/core/Cards/FeaturedCard/FeaturedCard";

export default function FeaturedBlog({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading = "Featured Blog",
  subheading,
  backgroundImageName = "var(--default-backgroundImageName)",
  blog,
}) {
  return (
    <section className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
          <Heading
            heading={heading}
            subheading={subheading}
            backgroundImageName={backgroundImageName}
          />
          <FeaturedCard
            imageSrc={blog.imageSrc}
            imageSrcMobile={blog.imageSrcMobile}
            imageAlt={blog.imageAlt}
            imageWidth={blog.imageWidth}
            imageHeight={blog.imageHeight}
            layoutImage={blog.layoutImage}
            objectFitImage={blog.objectFitImage}
            paddingSection={blog.paddingSection}
            positionDiv={blog.positionDiv}
            widthDiv={blog.widthDiv}
            heightDiv={blog.heightDiv}
            borderRadiusDiv={blog.borderRadiusDiv}
            overflowDiv={blog.overflowDiv}
            boxShadowDiv={blog.boxShadowDiv}
            hrefLink={blog.hrefLink}
            textLink={blog.textLink}
            textParagraph={blog.textParagraph}
            title={blog.title}
            buttons={blog.buttons}
            border={blog.border}
          />
        </section>
      </SectionWrapper>
    </section>
  );
}
