import styles from "./GlobalWrapper.module.css";

export default function GlobalWrapper({
  children,
  backgroundMain = "var(--default-backgroundMain)",
  colorMain = "var(--default-colorMain)",
  backgroundWallpaper = "var(--default-backgroundWallpaper)",
  filterWallpaper = "var(--default-filterWallpaper)",
  linkBorderBottom = "var(--default-link-border-bottom)",
  linkBackgroundColor = "var(--default-link-background-color)",
}) {
  return (
    <section
      className={styles.main}
      style={{
        background: backgroundMain,
        color: colorMain,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            a {
              border-bottom: ${linkBorderBottom};
            }
            a::after {
              background-color: ${linkBackgroundColor};
            }
          `,
        }}
      />
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
