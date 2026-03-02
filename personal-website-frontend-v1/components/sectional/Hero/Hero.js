import TwoPaneLayout from "@/components/core/TwoPaneLayout/TwoPaneLayout";
import styles from "./Hero.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import deepMerge from "@/utils/styling/deepMerge";
import { defaultHeroStyling } from "@/defaults/styling/core";
import generateCSS from "@/utils/styling/generateCSS";

export default function Hero({ styling, ...extraProps }) {
  const { main, interactive } = deepMerge(defaultHeroStyling, styling);
  return (
    <header className={`${styles.main} iMain`} style={main}>
      <style>{generateCSS(interactive)}</style>
      <SectionWrapper>
        <TwoPaneLayout />
      </SectionWrapper>
    </header>
  );
}
