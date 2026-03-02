import styles from "./InsertHtml.module.css";

export default function InsertHtml({ externalHtml }) {
  return (
    <div
      className={`${styles.externalHtml}`}
      dangerouslySetInnerHTML={{ __html: externalHtml }}
    ></div>
  );
}
