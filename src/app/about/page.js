"use client"

import {ReactLenis} from "@studio-freight/react-lenis"
import Navbar from "../../../components/Navbar/Navbar";
import Background from "../../../components/Background/Background";
import Footer from "../../../components/Footer/Footer";
import HeroContact from "../../../components/HeroContact/HeroContact";
import PreLoader3 from "../../../components/PreLoader3/PreLoader3";
import AboutHeroSection from "../../../components/AboutHeroSection/AboutHeroSection";
import AboutNote from "../../../components/AboutNote/AboutNote";
import AboutEducation from "../../../components/AboutEducation/AboutEducation";

export default function About() {
    return (
    <ReactLenis root>
      <div className="font-[family-name:var(--font-geist-sans)] RootElement">
        <Navbar></Navbar>
        <AboutHeroSection></AboutHeroSection>
        <AboutNote></AboutNote>
        <AboutEducation></AboutEducation>
        <HeroContact></HeroContact>
        <Footer></Footer>
      </div>
    </ReactLenis>
    )
}