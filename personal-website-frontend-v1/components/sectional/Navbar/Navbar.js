import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import styles from "./Navbar.module.css";
import deepMerge from "@/utils/styling/deepMerge";
import { defaultNavbarStyling } from "@/defaults/styling/sectional";
import Link from "next/link";
import generateCSS from "@/utils/styling/generateCSS";

export default function Navbar({ styling, data, ...extraProps }) {
  const { main, wrapper, logo, ul, li, version, interactive } = deepMerge(
    defaultNavbarStyling,
    styling
  );

  data = {
    name: "Somesh Kumar",
    version: "MK-X",
    navbarLinks: [
      {
        key: "Home",
        value: "/",
      },
      {
        key: "Projects",
        value: "/projects",
      },
      {
        key: "Blogs",
        value: "/blogs",
      },
      {
        key: "Now",
        value: "/now",
      },
      {
        key: "Contact",
        value: "/contact",
      },
      {
        key: "Updates",
        value: "/updates",
      },
    ],
  };
  return (
    <nav className={`${styles.main} iMain`} style={main}>
      <style>{generateCSS(interactive)}</style>
      <SectionWrapper>
        <section className={`${styles.wrapper} iWrapper`} style={wrapper}>
          <span className={`${styles.logo} iLogo`} style={logo}>
            <Link href={"/"}>{data.name}</Link>
            <span className={`${styles.version} iVersion`} style={version}>
              {data.version}
            </span>
          </span>
          <ul className={`${styles.ul} iUl`} style={ul}>
            {data.navbarLinks.map((navbarLink, index) => {
              return (
                <li key={index} className={`${styles.li} iLi`} style={li}>
                  <Link href={navbarLink.value}>{navbarLink.key}</Link>
                </li>
              );
            })}
          </ul>
        </section>
      </SectionWrapper>
    </nav>
  );
}
