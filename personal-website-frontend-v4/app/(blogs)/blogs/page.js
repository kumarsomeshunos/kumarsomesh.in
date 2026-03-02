import styles from "./page.module.css";
import Navbar from "@/components/core/Navbar/Navbar";
import Blogs from "@/components/Home/Blogs/Blogs";
import Footer from "@/components/core/Footer/Footer";
import End from "@/components/core/Footer/End";
import FeaturedBlog from "@/components/Blogs/FeaturedBlog/FeaturedBlog";
import { navbarThemeingEngine, featuredBlogThemeingEngine, blogSectionThemeingEngine, footerThemeingEngine, endThemeingEngine } from "@/themeingEngine";

export default function BlogsPage() {
  const navbarData = navbarThemeingEngine();
  const featuredBlogData = featuredBlogThemeingEngine();
  const blogsSectionData = blogSectionThemeingEngine();
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
      <FeaturedBlog
        backgroundMain={featuredBlogData.backgroundMain}
        colorMain={featuredBlogData.colorMain}
        backgroundWallpaper={featuredBlogData.backgroundWallpaper}
        filterWallpaper={featuredBlogData.filterWallpaper}
        heading={featuredBlogData.heading}
        subheading={featuredBlogData.subheading}
        backgroundImageName={featuredBlogData.backgroundImageName}
        blog={featuredBlogData.blog}
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
