"use client"

import {ReactLenis} from "@studio-freight/react-lenis"
import Navbar from "../../../components/Navbar/Navbar";
import Background from "../../../components/Background/Background";
import Footer from "../../../components/Footer/Footer";
import HeroContact from "../../../components/HeroContact/HeroContact";
import PreLoader3 from "../../../components/PreLoader3/PreLoader3";
import AboutHeroSection from "../../../components/AboutHeroSection/AboutHeroSection";

export default function Contact() {
    return (
    <ReactLenis root>
      <div className="font-[family-name:var(--font-geist-sans)] RootElement">
        {/* <PreLoader></PreLoader> */}
        {/* <PreLoader2></PreLoader2> */}
        {/* <PreLoader3></PreLoader3> */}
        {/* <Background></Background> */}
        <Navbar></Navbar>
        <AboutHeroSection></AboutHeroSection>
        <HeroContact></HeroContact>
        <Footer></Footer>z
      </div>
    </ReactLenis>
    )
}