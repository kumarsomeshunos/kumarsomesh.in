import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Updates from "@/components/Updates/Updates";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/Footer/End";
import {
  navbarThemeingEngine,
  updatesThemeingEngine,
  footerThemeingEngine,
  endThemeingEngine,
} from "@/themeingEngine";

export default function ProjectsPage() {
  const navbarData = navbarThemeingEngine();
  const updatesData = updatesThemeingEngine();
  const footerData = footerThemeingEngine();
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
      <Updates
        backgroundMain={updatesData.backgroundMain}
        colorMain={updatesData.colorMain}
        backgroundWallpaper={updatesData.backgroundWallpaper}
        filterWallpaper={updatesData.filterWallpaper}
        heading={updatesData.heading}
        subheading={updatesData.subheading}
        backgroundImageName={updatesData.backgroundImageName}
        updates={updatesData.updates}
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
