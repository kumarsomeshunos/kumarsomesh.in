import styles from "./MainButton.module.css";
import Link from "next/link";

export default function MainButton({
  href,
  text,
  background,
  border,
  boxShadow,
  color,
  padding,
  margin,
  borderRadius,
  textDecoration,
  transition,
  backgroundHover,
  borderHover,
  boxShadowHover,
  colorHover,
  paddingHover,
  marginHover,
  borderRadiusHover,
  textDecorationHover,
  transitionHover,
}) {
  return (
    <Link
      href={href || "#"}
      className={styles.main}
      style={{
        "--defalut-backgroundButton": background,
        "--deafult-borderButton": border,
        "--default-box-shadowButton": boxShadow,
        "--default-colorButton": color,
        "--default-paddingButton": padding,
        "--default-marginButton": margin,
        "--default-borderRadiusButton": borderRadius,
        "--default-textDecorationButton": textDecoration,
        "--default-transitionButton": transition,
        "--defalut-backgroundButtonHover": backgroundHover,
        "--deafult-borderButtonHover": borderHover,
        "--default-box-shadowButtonHover": boxShadowHover,
        "--default-colorButtonHover": colorHover,
        "--default-paddingButtonHover": paddingHover,
        "--default-marginButtonHover": marginHover,
        "--default-borderRadiusButtonHover": borderRadiusHover,
        "--default-textDecorationButtonHover": textDecorationHover,
        "--default-transitionButtonHover": transitionHover,
      }}
    >
      {text}
    </Link>
  );
}
