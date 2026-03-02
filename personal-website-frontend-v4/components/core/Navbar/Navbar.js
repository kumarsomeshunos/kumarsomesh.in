import styles from "./Navbar.module.css";
import SectionWrapper from "../Wrappers/SectionWrapper";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import Dropdown from "./Dropdown";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Navbar({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  name = "Somesh Kumar",
  version = null,
  navbarLinks,
}) {
  return (
    <nav className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
          <span className={`${styles.logo} ${ubuntu.className}`}>
            <Link href={"/"}>{name}</Link>
            <span className={styles.version}>{version}</span>
          </span>
          <ul className={styles.ul}>
            {navbarLinks.map((navbarLink, index) => {
              return (
                <li key={index} className={styles.li}>
                  <Link href={navbarLink.value}>{navbarLink.key}</Link>
                </li>
              );
            })}
            <Dropdown
              backgroundMain={backgroundMain}
              colorMain={colorMain}
              backgroundWallpaper={backgroundWallpaper}
              filterWallpaper={filterWallpaper}
            />
          </ul>
        </section>
      </SectionWrapper>
    </nav>
  );
}
