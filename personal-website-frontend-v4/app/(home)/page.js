import End from "@/components/core/Footer/End";
import Footer from "@/components/core/Footer/Footer";
import Navbar from "@/components/core/Navbar/Navbar";
import Blogs from "@/components/Home/Blogs/Blogs";
import Hero from "@/components/Home/Hero/Hero";
import Now from "@/components/Home/Now/Now";
import Projects from "@/components/Home/Projects/Projects";

import {
  navbarThemeingEngine,
  heroThemeingEngine,
  projectSectionThemeingEngine,
  blogSectionThemeingEngine,
  nowSectionThemeingEngine,
  footerThemeingEngine,
  endThemeingEngine,
} from "@/themeingEngine";

export default async function Home() {
  const navbarData = navbarThemeingEngine();
  const heroData = heroThemeingEngine();
  const projectsSectionData = projectSectionThemeingEngine();
  const blogsSectionData = blogSectionThemeingEngine();
  const nowSectionData = nowSectionThemeingEngine();
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
      <Hero
        backgroundMain={heroData.backgroundMain}
        colorMain={heroData.colorMain}
        backgroundWallpaper={heroData.backgroundWallpaper}
        filterWallpaper={heroData.filterWallpaper}
        greetings={heroData.greetings}
        name={heroData.name}
        backgroundImageName={heroData.backgroundImageName}
        introductionMD={heroData.introductionMD}
        heroButtons={heroData.heroButtons}
        displayProfile={heroData.displayProfile}
        displayProfileAlt={heroData.displayProfileAlt}
      />
      <Projects
        backgroundMain={projectsSectionData.backgroundMain}
        colorMain={projectsSectionData.colorMain}
        backgroundWallpaper={projectsSectionData.backgroundWallpaper}
        filterWallpaper={projectsSectionData.filterWallpaper}
        heading={projectsSectionData.heading}
        subheading={projectsSectionData.subheading}
        backgroundImageName={projectsSectionData.backgroundImageName}
        projects={projectsSectionData.projects}
      />
      <Blogs
        backgroundMain={blogsSectionData.backgroundMain}
        colorMain={blogsSectionData.colorMain}
        backgroundWallpaper={blogsSectionData.backgroundWallpaper}
        filterWallpaper={blogsSectionData.filterWallpaper}
        heading={blogsSectionData.heading}
        subheading={blogsSectionData.subheading}
        backgroundImageName={blogsSectionData.backgroundImageName}
        blogs={blogsSectionData.blogs}
      />
      <Now
        backgroundMain={nowSectionData.backgroundMain}
        colorMain={nowSectionData.colorMain}
        backgroundWallpaper={nowSectionData.backgroundWallpaper}
        filterWallpaper={nowSectionData.filterWallpaper}
        heading={nowSectionData.heading}
        subheading={nowSectionData.subheading}
        backgroundImageName={nowSectionData.backgroundImageName}
        now={nowSectionData.now}
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
