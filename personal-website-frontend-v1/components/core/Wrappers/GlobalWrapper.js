import deepMerge from "@/utils/styling/deepMerge";
import styles from "./GlobalWrapper.module.css";
import { defaultGlobalWrapperStyling } from "@/defaults/styling/core";
import generateCSS from "@/utils/styling/generateCSS";

export default function GlobalWrapper({ children, styling, ...extraProps }) {
  const { main, wallpaper, container, interactive } = deepMerge(
    defaultGlobalWrapperStyling,
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
