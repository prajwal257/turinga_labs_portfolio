"use client"

import {ReactLenis} from "@studio-freight/react-lenis"
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import HeroNote from "../../components/HeroNote/HeroNote";
import Background from "../../components/Background/Background";
import BackgroundCursor from "../../components/BackgroundCursor/BackgroundCursor";
import HeroExperiences from "../../components/HeroExperiences/HeroExperiences";
import HeroBusinessImpact from "../../components/HeroBusinessImpact/HeroBusinessImpact"
import HeroProjects from "../../components/HeroProjects/HeroProjects";
import HeroCertifications from "../../components/HeroCretifications/HeroCertifications"
import Blogs from "../../components/HeroBlogs/HeroBlogs";
import Footer from "../../components/Footer/Footer";
import HeroContact from "../../components/HeroContact/HeroContact";
// import PreLoader from "../../components/PreLoader/PreLoader";
// import PreLoader2 from "../../components/Proloader2/PreLoader2";
import PreLoader3 from "../../components/PreLoader3/PreLoader3";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="font-[family-name:var(--font-geist-sans)] RootElement">
        {/* <PreLoader></PreLoader> */}
        {/* <PreLoader2></PreLoader2> */}
        <PreLoader3></PreLoader3>
        <BackgroundCursor />
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <HeroNote></HeroNote>
        <HeroExperiences></HeroExperiences>
        <HeroBusinessImpact />
        <HeroProjects></HeroProjects>
        <HeroCertifications></HeroCertifications>
        {/* <Blogs></Blogs> */}
        <HeroContact></HeroContact>
        <Footer></Footer>
      </div>
    </ReactLenis>
  );
}
