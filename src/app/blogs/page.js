"use client"

import {ReactLenis} from "@studio-freight/react-lenis"
import Navbar from "../../../components/Navbar/Navbar";
import Background from "../../../components/Background/Background";
import Blogs from "../../../components/HeroBlogs/HeroBlogs";
import Footer from "../../../components/Footer/Footer";
import HeroContact from "../../../components/HeroContact/HeroContact";
import PreLoader3 from "../../../components/PreLoader3/PreLoader3";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="font-[family-name:var(--font-geist-sans)] RootElement">
        {/* <PreLoader></PreLoader> */}
        {/* <PreLoader2></PreLoader2> */}
        {/* <PreLoader3></PreLoader3> */}
        {/* <Background></Background> */}
        <Navbar></Navbar>
        <Blogs></Blogs>
        <HeroContact></HeroContact>
        <Footer></Footer>
      </div>
    </ReactLenis>
  );
}
