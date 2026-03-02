"use client";

import styles from "./MasonryCardHolder.module.css";
import Masonry from "react-masonry-css";

export default function MasonryCardHolder({ children, breakpointCols }) {
  return (
    <Masonry
      breakpointCols={
        breakpointCols || {
          default: 3,
          1100: 2,
          700: 1,
        }
      }
      className={styles.myMasonryGrid}
      columnClassName={styles.myMasonryGrid_column}
    >
      {children}
    </Masonry>
  );
}
