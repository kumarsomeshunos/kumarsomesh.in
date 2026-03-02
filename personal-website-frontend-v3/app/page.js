import Hero from "@/components/sectional/Home/Hero/Hero";
import Navbar from "@/components/sectional/Home/Navbar/Navbar";

import { NavbarData, NavbarStyles } from "@/data/NavbarData";
import { HeroData, HeroStyles } from "@/data/HeroData";
import { ProjectsData, ProjectsStyles } from "@/data/ProjectsData";
import { BlogsData, BlogsStyles } from "@/data/BlogsData";
import { NowData, NowStyles } from "@/data/NowData";
import { FooterData, FooterStyles } from "@/data/FooterData";
import Projects from "@/components/sectional/Home/Projects/Projects";
import Blogs from "@/components/sectional/Home/Blogs/Blogs";
import Now from "@/components/sectional/Home/Now/Now";
import Footer from "@/components/sectional/Home/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar data={NavbarData} styling={NavbarStyles} />
      <Hero left={HeroData.left} right={HeroData.right} styling={HeroStyles} />
      <Projects data={ProjectsData} styling={ProjectsStyles} />
      <Blogs data={BlogsData} styling={BlogsStyles} />
      <Now data={NowData} styling={NowStyles} />
      <Footer data={FooterData} styling={FooterStyles} />
    </>
  );
}
