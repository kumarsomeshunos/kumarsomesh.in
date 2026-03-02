import deepMerge from "@/utils/styling/deepMerge";
import styles from "./SectionWrapper.module.css";
import { defaultSectionWrapperStyling } from "@/defaults/styling/core";
import generateCSS from "@/utils/styling/generateCSS";

export default function SectionWrapper({ children, styling, ...extraProps }) {
  const { main, wallpaper, container, interactive } = deepMerge(
    defaultSectionWrapperStyling,
    styling
  );

  return (
    <section className={`${styles.main} iMain`} style={main} {...extraProps}>
      <style>{generateCSS(interactive)}</style>
      <div className={`${styles.wallpaper} iWallpaper`} style={wallpaper}></div>
      <div className={`${styles.container} iContainer`} style={container}>
        {children}
      </div>
    </section>
  );
}
