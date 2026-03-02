import SectionWrapper from "../Wrappers/SectionWrapper";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  footerImageSrc,
  footerImageAlt,
  footerImageWidth,
  footerImageHeight,
  footerLinksTitle,
  footerLinks,
}) {
  return (
    <footer className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
          <div className={styles.leftPortion}>
            <Image
              src={footerImageSrc}
              width={footerImageWidth}
              height={footerImageHeight}
              alt={footerImageAlt}
            />
          </div>
          <div className={styles.rightPortion}>
            <h2 className={styles.linkHeading}>{footerLinksTitle}</h2>
            <ul className={styles.ul}>
              {footerLinks.map((link, index) => {
                return (
                  <li className={styles.li} key={index}>
                    <Link href={link.value}>{link.key}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </SectionWrapper>
    </footer>
  );
}
