import styles from "./SectionWrapper.module.css";

export default function SectionWrapper({
  children,
  backgroundMain = undefined,
  colorMain = undefined,
  backgroundWallpaper = undefined,
  filterWallpaper = undefined,
}) {
  return (
    <section
      className={styles.main}
      style={{
        background: backgroundMain,
        color: colorMain,
      }}
    >
      <div
        className={styles.wallpaper}
        style={{
          background: backgroundWallpaper,
          filter: filterWallpaper,
        }}
      ></div>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
