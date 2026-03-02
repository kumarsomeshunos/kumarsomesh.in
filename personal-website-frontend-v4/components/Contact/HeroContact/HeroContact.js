import styles from "./HeroContact.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import Heading from "@/components/core/Heading/Heading";
import Image from "next/image";
import InsertHtml from "@/components/core/InsertHtml/InsertHtml";

export default function HeroContact({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading = "Contact",
  subheading,
  backgroundImageName,
  sendButton,
  socialLinks,
  contactInfo,
}) {
  return (
    <section className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <Heading
          heading={heading}
          subheading={subheading}
          backgroundImageName={backgroundImageName}
        />
        <section className={styles.wrapper}>
          <section className={styles.leftPortion}>
            <form action="">
              <div className={styles.formGroup}>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Name"
                />
                <br />
              </div>
              <div className={styles.formGroup}>
                <input
                  className={styles.formInput}
                  type="email"
                  placeholder="Email"
                />
                <br />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  className={styles.fromTextArea}
                  placeholder="Write your message here..."
                />
                <br />
              </div>
              {/* <button type="submit">Send</button> */}
              <MainButton
                text={sendButton.key}
                href={sendButton.value}
                background={sendButton.background}
                border={sendButton.border}
                boxShadow={sendButton.boxShadow}
                color={sendButton.color}
                padding={sendButton.padding}
                margin={sendButton.margin}
                borderRadius={sendButton.borderRadius}
                textDecoration={sendButton.textDecoration}
                transition={sendButton.transition}
                backgroundHover={sendButton.backgroundHover}
                borderHover={sendButton.borderHover}
                boxShadowHover={sendButton.boxShadowHover}
                colorHover={sendButton.colorHover}
                paddingHover={sendButton.paddingHover}
                marginHover={sendButton.marginHover}
                borderRadiusHover={sendButton.borderRadiusHover}
                textDecorationHover={sendButton.textDecorationHover}
                transitionHover={sendButton.transitionHover}
              />
            </form>
          </section>
          <section className={styles.rightPortion}>
            <InsertHtml externalHtml={contactInfo} />
            <div className={styles.socialMediaLinks}>
              {socialLinks.map((socialLink, index) => {
                return (
                  <a
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <Image
                      src={socialLink.imgSrc}
                      alt={socialLink.alt}
                      width={socialLink.width}
                      height={socialLink.height}
                    />
                  </a>
                );
              })}
            </div>
          </section>
        </section>
      </SectionWrapper>
    </section>
  );
}
