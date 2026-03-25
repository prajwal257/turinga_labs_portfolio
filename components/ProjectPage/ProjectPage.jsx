"use client"
import React from 'react'
import styles from './ProjectPage.module.scss'
import { ReactLenis } from "@studio-freight/react-lenis";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeroContact from "../HeroContact/HeroContact";
import Link from 'next/link';

function ProjectPage({id}) {
    let ProjectHeader = "";
    let ProjectDescription = "";
    let ProjectCoverImage = "";
    let ProjectTextLine1 = "";
    let ProjectArchitecture = "";
    let ProjectTextLine2 = "";
    let GithubLink = "";
    let ProjectScreenshot = "";
    if(id == 1){
        ProjectHeader = "Studio Ghibly Image Converter: Using Open Source Image to Image Models";
        ProjectDescription = "Project was made as an alternative to chatgpt, image to studio-ghibly like image converter.";
        ProjectCoverImage = "../assets/Output_1.png";
        ProjectTextLine1 = "";
        ProjectArchitecture = "../assets/project-1-architecture.png";
        ProjectTextLine2 = "";
        GithubLink = "https://github.com/prajwal257/ghibliApi";
        ProjectScreenshot = "";
    } else{
        ProjectHeader = "Interview Intelligence: AI Audio Analyst";
        ProjectDescription = "Drop in an interview recording, get a full candidate report in seconds. Produces multi-dimensional scoring across technical depth, communication clarity, and problem solving — with radar charts, behavioral hesitation signals, topic sentiment, and a timestamped interview timeline. Built on a RAG pipeline with FastAPI and React.";
        ProjectCoverImage = "../assets/Output_2.png";
        ProjectTextLine1 = "The pipeline takes a raw interview audio file and transforms it into a structured JSON report through two sequential AI stages, all orchestrated by a FastAPI backend sitting between the user and the processing layers.";
        ProjectArchitecture = "../assets/project-2-architecture.png";
        ProjectTextLine2 = " \
            The pipeline takes a raw interview audio file and transforms it into a structured JSON report \
            through two sequential AI stages, orchestrated by a FastAPI backend. \
             \
            Step 1 — Upload: The user uploads an <code>.mp3</code> file through the Next.js \
            frontend, which sends it to the FastAPI backend via a REST call. \
             \
            Step 2 — Transcription (local GPU): FastAPI passes the audio to Open AI Whisper, \
            running locally on a personal GPU. Whisper performs speech-to-text and outputs a raw transcript \
            as a <code>.txt</code> file. \
             \
            Step 3 — Summarization (Groq API): The transcript is sent to LLaMA 3.1 8B via \
            the Groq API, which extracts evaluation metrics — scores, hesitation signals, topic sentiments, \
            timeline segments, and key takeaways. \
             \
            Step 4 — JSON Response: LLaMA returns a structured JSON object with all numbered \
            scores and categorized data ready for rendering. \
             \
            Step 5 — UI Render: FastAPI sends the JSON back to Next.js, which renders the \
            full dashboard — radar charts, progress bars, sentiment chips, and the interview timeline. \
        ";
        ProjectScreenshot = "";
        GithubLink = "https://github.com/prajwal257/InterviewMeetingAnalyzer/tree/main";
    }
  return (
    <ReactLenis root>
        <Navbar />
        <div className={styles.ProjectPageContainer}>
            {/* <h1>ProjectPage: {id}</h1> */}
            {/* <h3><button className={styles.BackButton}><img src="../assets/backIcon.png" alt="Go Back" />Home/</button>Project</h3> */}
            <div className={styles.ProjectSubPageContainer}>
                <div className={styles.ProjectHeader}>
                    <h1>{ProjectHeader}</h1>
                    <h3>{ProjectDescription}</h3>
                    <img src={ProjectCoverImage} alt='Project Cover Image'/>
                </div>
                <div className={styles.ProjectHeader}>
                    {/* <h1>{ProjectHeader}</h1> */}
                    <h3>{ProjectTextLine1}</h3>
                    <img src={ProjectArchitecture} alt='Project Cover Image'/>
                    <h3>{ProjectTextLine2}</h3>
                </div>
            </div>
            {/* <Link href="/ghiblyImageConverter">{GithubLink}</Link> */}
        </div>
        <HeroContact />
        <Footer />
    </ReactLenis>
  )
}

export default ProjectPage