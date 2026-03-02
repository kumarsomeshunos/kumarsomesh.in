import styles from "./Hero.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import InsertHtml from "@/components/core/InsertHtml/InsertHtml";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import Image from "next/image";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Hero({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  greetings = "Hello, I'm",
  name = "Somesh Kumar",
  backgroundImageName = "var(--default-backgroundImageName)",
  introductionMD,
  heroButtons,
  displayProfile,
  displayProfileAlt = "Display Profile Image",
}) {
  return (
    <header className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
          <section className={styles.leftPortion}>
            <p className={styles.greetings}>{greetings}</p>
            <h1
              className={`${styles.name} ${ubuntu.className}`}
              style={{
                backgroundImage: backgroundImageName,
              }}
            >
              {name}
            </h1>
            {introductionMD && <InsertHtml externalHtml={introductionMD} />}
            {heroButtons && (
              <div className={styles.buttons}>
                {heroButtons.map((heroButton, index) => {
                  return (
                    <MainButton
                      key={index}
                      text={heroButton.key}
                      href={heroButton.value}
                      background={heroButton.background}
                      border={heroButton.border}
                      boxShadow={heroButton.boxShadow}
                      color={heroButton.color}
                      padding={heroButton.padding}
                      margin={heroButton.margin}
                      borderRadius={heroButton.borderRadius}
                      textDecoration={heroButton.textDecoration}
                      transition={heroButton.transition}
                      backgroundHover={heroButton.backgroundHover}
                      borderHover={heroButton.borderHover}
                      boxShadowHover={heroButton.boxShadowHover}
                      colorHover={heroButton.colorHover}
                      paddingHover={heroButton.paddingHover}
                      marginHover={heroButton.marginHover}
                      borderRadiusHover={heroButton.borderRadiusHover}
                      textDecorationHover={heroButton.textDecorationHover}
                      transitionHover={heroButton.transitionHover}
                    />
                  );
                })}
              </div>
            )}
          </section>
          <section className={styles.rightPortion}>
            {displayProfile && (
              <Image
                src={displayProfile}
                width={800}
                height={1200}
                alt={displayProfileAlt}
                className={styles.displayProfile}
              />
            )}
          </section>
        </section>
      </SectionWrapper>
    </header>
  );
}
