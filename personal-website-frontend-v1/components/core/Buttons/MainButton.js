import Link from "next/link";
import styles from "./MainButton.module.css";
import deepMerge from "@/utils/styling/deepMerge";
import { defaultMainButtonStyling } from "@/defaults/styling/core";
import generateCSS from "@/utils/styling/generateCSS";

export default function MainButton({ styling, data, ...extraProps }) {
  const { main, interactive } = deepMerge(defaultMainButtonStyling, styling);
  return (
    <div>
      <style>{generateCSS(interactive)}</style>
      <Link
        href={data.value}
        className={`${styles.main} iMain`}
        style={main}
        {...extraProps}
      >
        {data.text}
      </Link>
    </div>
  );
}
