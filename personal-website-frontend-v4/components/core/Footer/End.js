import styles from "./End.module.css";
import SectionWrapper from "../Wrappers/SectionWrapper";

export default function End({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
}) {
  return (
    <div className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
          <p className={styles.quote}>
            Brick walls are there for a reason. They give us a chance to show
            how badly we want something. -- Randy Pausch
          </p>
        </section>
      </SectionWrapper>
    </div>
  );
}
