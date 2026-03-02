import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Image from "next/image";
import styles from "./page.module.css";

export default function TwoPaneLayout() {
  const stylesData = {
    leftPane: {
      width: "50%",
      textAlign: "left",
    },
    rightPane: {
      width: "50%",
      //   textAlign: "center",
      //   alignItems: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "end",
    },
  };
  return (
    <SectionWrapper>
      <div className={styles.main}>
        <div className={styles.leftPane} style={stylesData.leftPane}>
          <h2>Left Pane</h2>
        </div>
        <div className={styles.rightPane} style={stylesData.rightPane}>
          <h2>Right Pane</h2>
          <Image
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
            alt="image"
            width={100}
            height={50}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
