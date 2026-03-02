"use client";

import styles from "./Dropdown.module.css";
import { useState } from "react";

export default function Dropdown({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={toggleNavbar}
      className={`${styles.main} ${isOpen ? styles.open : ""}`}
      style={{
        background: backgroundMain,
        color: colorMain,
      }}
    >
      <li className={styles.li}>
        Theme{" "}
        <img src="https://miscellaneous.cdn.prismic.io/miscellaneous/Zxiad4F3NbkBX4UW_dropdown-svgrepo-com.svg" />
      </li>
      <ul
        className={styles.ul}
        style={{
          background: backgroundWallpaper,
          filter: filterWallpaper,
        }}
      >
        <li className={styles.themeSelect}>
          <a href="/themes/purewhite">PureWhite</a>
        </li>
        <li className={styles.li}>
          <a href="/themes/alldark">AllDark</a>
        </li>
      </ul>
    </div>
  );
}
