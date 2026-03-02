import Link from "next/link";
import styles from "./page.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Navbar from "@/components/sectional/Navbar/Navbar";
import Hero from "@/components/sectional/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
