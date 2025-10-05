"use client"
import React from 'react'
import styles from './ProjectPage.module.scss'
import { ReactLenis } from "@studio-freight/react-lenis";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeroContact from "../HeroContact/HeroContact";

function ProjectPage({id}) {
    let ProjectHeader = "";
    let ProjectDescription = "";
    let ProjectCoverImage = ""
    if(id == 1){
        ProjectHeader = "Studio Ghibly Image Converter: Using Open Source Image to Image Models";
        ProjectDescription = "Project was made as an alternative to chatgpt, image to studio-ghibly like image converter.";
        ProjectCoverImage = "../assets/Output_3.png";
    } else{
        ProjectHeader = "";
        ProjectDescription = "";
        ProjectCoverImage = "";
    }
  return (
    <ReactLenis root>
        <Navbar />
        <div className={styles.ProjectPageContainer}>
            {/* <h1>ProjectPage: {id}</h1> */}
            {/* <h3><button className={styles.BackButton}><img src="../assets/backIcon.png" alt="Go Back" />Home/</button>Project</h3> */}
            <div className={styles.ProjectHeader}>
                <h1>{ProjectHeader}</h1>
                <h3>{ProjectDescription}</h3>
                <img src={ProjectCoverImage} alt='Project Cover Image'/>
            </div>
        </div>
        <HeroContact />
        <Footer />
    </ReactLenis>
  )
}

export default ProjectPage