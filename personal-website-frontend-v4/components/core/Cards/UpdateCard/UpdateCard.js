import InsertHtml from "../../InsertHtml/InsertHtml";
import styles from "./UpdateCard.module.css";

export default function UpdateCard({
  updateDetailsHtml,
  background,
  border,
  boxShadow,
  color,
  borderRadius,
  textDecoration,
  transition,
  backgroundHover,
  borderHover,
  boxShadowHover,
  colorHover,
  borderRadiusHover,
  textDecorationHover,
  transitionHover,
}) {
  return (
    <article className={styles.main} style={{
      "--defalut-backgroundProjectCard": background,
      "--deafult-borderProjectCard": border,
      "--default-box-shadowProjectCard": boxShadow,
      "--default-colorProjectCard": color,
      "--default-borderRadiusProjectCard": borderRadius,
      "--default-textDecorationProjectCard": textDecoration,
      "--default-transitionProjectCard": transition,
      "--defalut-backgroundProjectCardHover": backgroundHover,
      "--deafult-borderProjectCardHover": borderHover,
      "--default-box-shadowProjectCardHover": boxShadowHover,
      "--default-colorProjectCardHover": colorHover,
      "--default-borderRadiusProjectCardHover": borderRadiusHover,
      "--default-textDecorationProjectCardHover": textDecorationHover,
      "--default-transitionProjectCardHover": transitionHover,
    }}>
      <div className={styles.wrapper}>
        <time datetime="2024-09-26">September 26, 2024</time>
        <h2>This is a heading</h2>
        <InsertHtml externalHtml={updateDetailsHtml} />
      </div>
    </article>
  );
}