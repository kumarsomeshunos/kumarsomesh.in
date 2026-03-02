import styles from "./Blogs.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import MasonryCardHolder from "@/components/core/Cards/MasonryCardHolder/MasonryCardHolder";
import BlogCard from "@/components/core/Cards/BlogCard/BlogCard";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";

export default function Blogs({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading = "Blogs",
  subheading,
  backgroundImageName = "var(--default-backgroundImageName)",
  blogs,
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
              default: 2,
              1100: 2,
              1000: 1,
            }}
          >
            {blogs.map((blog, index) => {
              return <BlogCard key={index} {...blog} />;
            })}
          </MasonryCardHolder>
          <div className={styles.buttons}>
            <MainButton text={"See More"} href={"/blogs"} />
          </div>
        </section>
      </SectionWrapper>
    </section>
  );
}
