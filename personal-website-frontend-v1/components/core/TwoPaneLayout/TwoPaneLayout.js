import deepMerge from "@/utils/styling/deepMerge";
import styles from "./TwoPaneLayout.module.css";
import generateCSS from "@/utils/styling/generateCSS";
import { defaultTwoPaneLayoutStyling } from "@/defaults/styling/core";
import MainButton from "../Buttons/MainButton";

export default function TwoPaneLayout({
  styling,
  leftComponent,
  rightComponent,
  ...extraProps
}) {
  const { main, leftPane, rightPane, interactive } = deepMerge(
    defaultTwoPaneLayoutStyling,
    styling
  );

  return (
    <div className={`${styles.main} iMain`} style={main} {...extraProps}>
      <style>{generateCSS(interactive)}</style>
      <div className={`${styles.leftPane} iLeftPane`} style={leftPane}>
        <div>
          <h1>Hi, I'm Somesh Kumar</h1>
          <p>
            a fourth-year B.Tech student at Manipal University | Jaipur,
            majoring in Information Technology. Passionate about tech and
            innovation, I specialize in the MERN stack. I work with languages
            like Java, JavaScript, C, and Python. Currently diving into the
            exciting world of Machine Learning 🤖, exploring its endless
            possibilities. Beyond coding, I'm intrigued by the inner workings of
            operating systems 💻 and love learning about them. Understanding how
            computers work and optimizing performance fuels my curiosity.
          </p>
          <MainButton data={{text: "Projects", value: "/"}} />
        </div>
      </div>
      <div className={`${styles.rightPane} iRightPane`} style={rightPane}>
        <img
          src="https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2F9dbdaa4a-04ec-4a9c-837f-23b9bbde21d6_hero.png&w=1920&q=75"
          alt="Hero Image"
        />
      </div>
    </div>
  );
}
