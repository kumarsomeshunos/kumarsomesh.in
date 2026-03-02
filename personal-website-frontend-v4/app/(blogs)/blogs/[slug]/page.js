import HeroBlog from "@/components/Blogs/HeroBlog/HeroBlog";
import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/Footer/End";
import {
  navbarThemeingEngine,
  heroBlogThemeingEngine,
  footerThemeingEngine,
  endThemeingEngine,
} from "@/themeingEngine";

export default function BlogPage() {
  const navbarData = navbarThemeingEngine();
  const footerData = footerThemeingEngine();
  const heroBlogData = heroBlogThemeingEngine();
  const endData = endThemeingEngine();

  return (
    <>
      <Navbar
        backgroundMain={navbarData.backgroundMain}
        colorMain={navbarData.colorMain}
        backgroundWallpaper={navbarData.backgroundWallpaper}
        filterWallpaper={navbarData.filterWallpaper}
        name={navbarData.name}
        version={navbarData.version}
        navbarLinks={navbarData.navbarLinks}
      />
      <HeroBlog
        heading={heroBlogData.heading}
        subheading={heroBlogData.subheading}
        backgroundImageName={heroBlogData.backgroundImageName}
        tags={heroBlogData.tags}
        postedOn={heroBlogData.postedOn}
        customImage={heroBlogData.customImage}
      />
      <Footer
        backgroundMain={footerData.backgroundMain}
        colorMain={footerData.colorMain}
        backgroundWallpaper={footerData.backgroundWallpaper}
        filterWallpaper={footerData.filterWallpaper}
        footerImageSrc={footerData.footerImageSrc}
        footerImageAlt={footerData.footerImageAlt}
        footerImageWidth={footerData.footerImageWidth}
        footerImageHeight={footerData.footerImageHeight}
        footerLinksTitle={footerData.footerLinksTitle}
        footerLinks={footerData.footerLinks}
      />
      <End
        backgroundMain={endData.backgroundMain}
        colorMain={endData.colorMain}
        backgroundWallpaper={endData.backgroundWallpaper}
        filterWallpaper={endData.filterWallpaper}
      />
    </>
  );
}
