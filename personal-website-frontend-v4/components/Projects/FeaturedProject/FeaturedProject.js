import FeaturedCard from "@/components/core/Cards/FeaturedCard/FeaturedCard";
import styles from "./FeaturedProject.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";

export default function FeaturedProjecet({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading = "Featured Project",
  subheading,
  backgroundImageName = "var(--default-backgroundImageName)",
  project,
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
            imageSrc={project.imageSrc}
            imageSrcMobile={project.imageSrcMobile}
            imageAlt={project.imageAlt}
            imageWidth={project.imageWidth}
            imageHeight={project.imageHeight}
            layoutImage={project.layoutImage}
            objectFitImage={project.objectFitImage}
            paddingSection={project.paddingSection}
            positionDiv={project.positionDiv}
            widthDiv={project.widthDiv}
            heightDiv={project.heightDiv}
            borderRadiusDiv={project.borderRadiusDiv}
            overflowDiv={project.overflowDiv}
            boxShadowDiv={project.boxShadowDiv}
            hrefLink={project.hrefLink}
            textLink={project.textLink}
            textParagraph={project.textParagraph}
            title={project.title}
            buttons={project.buttons}
            border={project.border}
          />
        </section>
      </SectionWrapper>
    </section>
  );
}
