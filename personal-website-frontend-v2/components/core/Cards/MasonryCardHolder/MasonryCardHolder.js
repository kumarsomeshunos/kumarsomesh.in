"use client";

import modifyClassNames from "@/utils/styling/modifyClassNames";
import Masonry from "react-masonry-css";

const defaultClassNames = {
  myMasonryGrid: ["flex", "ml-[-1rem]", "w-auto"],
  myMasonryGrid_column: ["pl-4", "bg-clip-padding"],
};

export default function MasonryCardHolder({
  children,
  breakpointCols,
  styling,
  ...extraProps
}) {
  return (
    <Masonry
      breakpointCols={
        breakpointCols || {
          default: 3,
          1100: 2,
          700: 1,
        }
      }
      className={`${
        modifyClassNames(
          defaultClassNames.myMasonryGrid,
          styling?.tailwind?.myMasonryGrid
        ) || defaultClassNames.myMasonryGrid.join(" ")
      }`}
      columnClassName={`${
        modifyClassNames(
          defaultClassNames.myMasonryGrid_column,
          styling?.tailwind?.myMasonryGrid_column
        ) || defaultClassNames.myMasonryGrid_column.join(" ")
      }`}
      style={styling?.vanilla?.myMasonryGrid}
      {...extraProps}
    >
      {children}
    </Masonry>
  );
}
