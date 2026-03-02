import Link from "next/link";
import MainButton from "../../Buttons/MainButton/MainButton";
import styles from "./NowCard.module.css";
import Image from "next/image";

// Change posterImage width and height depending on type of card (movie, song, book)

export default function NowCard({
  posterImage,
  posterImageAlt,
  posterImageWidth,
  posterImageHeight,
  nowTitle,
  songTitle,
  songArtist,
  songAlbum,
  description,
  buttons,
  rNowTitle,
  rNowDescription,
  cardsDesign,
}) {
  return (
    <article className={styles.main}>
      <div className={styles.wrapper}>
        <div
          className={styles.leftPortion}
          style={{
            background: cardsDesign.left.background,
            border: cardsDesign.left.border,
          }}
        >
          <Image
            src={posterImage}
            width={posterImageWidth}
            height={posterImageHeight}
            alt={posterImageAlt}
          />
          <div className={styles.songInfo}>
            <h1 className={styles.title}>{nowTitle}</h1>
            <hr />
            <h2 className={styles.artistAndAlbum}>{songTitle}</h2>
            <h2 className={styles.artistAndAlbum}>
              {songArtist} &bull; {songAlbum}
            </h2>
            <p className={styles.mySpotify}>{description}</p>
            <MainButton
              text={buttons.left.key}
              href={buttons.left.value}
              background={buttons.left.background}
              border={buttons.left.border}
              boxShadow={buttons.left.boxShadow}
              color={buttons.left.color}
              padding={buttons.left.padding}
              margin={buttons.left.margin}
              borderRadius={buttons.left.borderRadius}
              textDecoration={buttons.left.textDecoration}
              transition={buttons.left.transition}
              backgroundHover={buttons.left.backgroundHover}
              borderHover={buttons.left.borderHover}
              boxShadowHover={buttons.left.boxShadowHover}
              colorHover={buttons.left.colorHover}
              paddingHover={buttons.left.paddingHover}
              marginHover={buttons.left.marginHover}
              borderRadiusHover={buttons.left.borderRadiusHover}
              textDecorationHover={buttons.left.textDecorationHover}
              transitionHover={buttons.left.transitionHover}
            />
          </div>
        </div>
        <div
          className={styles.rightPortion}
          style={{
            background: cardsDesign.right.background,
            margin: cardsDesign.right.margin,
            borderRadius: cardsDesign.right.borderRadius,
            border: cardsDesign.right.border,
          }}
        >
          <h1 className={styles.title}>{rNowTitle}</h1>
          <hr />
          <p className={styles.mySpotify}>{rNowDescription}</p>
          <MainButton
            text={buttons.right.key}
            href={buttons.right.value}
            background={buttons.right.background}
            border={buttons.right.border}
            boxShadow={buttons.right.boxShadow}
            color={buttons.right.color}
            padding={buttons.right.padding}
            margin={buttons.right.margin}
            borderRadius={buttons.right.borderRadius}
            textDecoration={buttons.right.textDecoration}
            transition={buttons.right.transition}
            backgroundHover={buttons.right.backgroundHover}
            borderHover={buttons.right.borderHover}
            boxShadowHover={buttons.right.boxShadowHover}
            colorHover={buttons.right.colorHover}
            paddingHover={buttons.right.paddingHover}
            marginHover={buttons.right.marginHover}
            borderRadiusHover={buttons.right.borderRadiusHover}
            textDecorationHover={buttons.right.textDecorationHover}
            transitionHover={buttons.right.transitionHover}
          />
        </div>
      </div>
    </article>
  );
}
