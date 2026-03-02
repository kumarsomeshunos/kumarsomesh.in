import styles from "./Heading.module.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Heading({ backgroundImageName, heading, subheading, hr }) {
  return (
    (heading || subheading) && (
      <section className={styles.main}>
        {heading && (
          <h1
            className={`${styles.heading} ${ubuntu.className}`}
            style={{
              backgroundImage:
                backgroundImageName || "var(--default-backgroundImageName)",
            }}
          >
            {heading}
          </h1>
        )}
        {subheading && <p className={styles.subheading}>{subheading}</p>}
        {hr && <hr />}
      </section>
    )
  );
}
