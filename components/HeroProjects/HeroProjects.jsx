"use client"
import React from 'react'
import styles from "./HeroProjects.module.scss"
import HeroProject from '../HeroProject/HeroProject'
import Link from 'next/link'

function HeroProjects() {

  const Projects = [
    {
      "title": "Studio Ghibly Image Converter",
      "tech": ["python", "fastapi"],
      "duration": "Apr 2025",
      "description": "I designed a FastAPI service that applies Studio Ghibli–inspired LoRA styles to input images. The pipeline supports prompt templating, batch generation, and metadata logging on a self-hosted GPU, demonstrating practical MLOps for generative AI." 
    },
    {
      "title": "Ai Notes and Summarization",
      "tech": ["RAG", "FastAPI", "React.js"],
      "duration": "Mar 2025",
      "description": "The summarization features let's users quickly read through the entire paage, watch long youtube videos and write note associated with them." 
    },
    // {
    //   "title": "Covid-19 Mortality Risk Prediction",
    //   "tech": ["Jupyter-Lab", "FastAPI", "JS"],
    //   "duration": "2022",
    //   "description": "This project focuses on Machine Learning, the data we gathered was from US FDA resources, after EDA we were able to create a model to predict the mortality for a patient." 
    // }
  ]
  return (
    <div className={styles.HeroProjects}>
      <h3>Independent Projects:</h3>
      <div className={styles.ProjectsList}>
        {Projects.map((Project, index) => (
          <Link key={index} href={`/projects/${index+1}`}>
            <HeroProject key={index} {...Project} index={index} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HeroProjects