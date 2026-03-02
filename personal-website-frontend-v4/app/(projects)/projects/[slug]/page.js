import HeroProject from "@/components/Projects/HeroProject/HeroProject";
import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/Footer/End";
import {
  navbarThemeingEngine,
  heroProjectThemeingEngine,
  footerThemeingEngine,
  endThemeingEngine,
} from "@/themeingEngine";

export default function ProjectPage({ params }) {
  const navbarData = navbarThemeingEngine();
  const heroProjectData = heroProjectThemeingEngine(params.slug);
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
      <HeroProject
        heading={heroProjectData.heading}
        subheading={heroProjectData.subheading}
        backgroundImageName={heroProjectData.backgroundImageName}
        projectInfo={heroProjectData.projectInfo}
        heroButtons= {heroProjectData.heroButtons}
        customImage={heroProjectData.customImage}
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
