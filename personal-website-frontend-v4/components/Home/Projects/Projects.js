import styles from "./Projects.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import MasonryCardHolder from "@/components/core/Cards/MasonryCardHolder/MasonryCardHolder";
import ProjectCard from "@/components/core/Cards/ProjectCard/ProjectCard";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";

export default function Projects({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading = "Projects",
  subheading,
  backgroundImageName = "var(--default-backgroundImageName)",
  projects,
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
          <MasonryCardHolder
            breakpointCols={{
              default: 3,
              1100: 2,
              700: 1,
            }}
          >
            {projects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </MasonryCardHolder>
          <div className={styles.buttons}>
            <MainButton text={"See More"} href={"/projects"} />
          </div>
        </section>
      </SectionWrapper>
    </section>
  );
}
