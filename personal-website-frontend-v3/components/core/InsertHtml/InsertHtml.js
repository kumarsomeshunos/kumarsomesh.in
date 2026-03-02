import styles from "./InsertHtml.module.css";

export default function InsertHtml({ externalHtml }) {
  return (
    <section
      className={styles.externalHtml}
      dangerouslySetInnerHTML={{ __html: externalHtml }}
    ></section>
  );
}
