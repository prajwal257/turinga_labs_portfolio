import React from 'react'
import styles from "./HeroProjects.module.scss"
import HeroProject from '../HeroProject/HeroProject'

function HeroProjects() {

  const Projects = [
    {
      "title": "Studo Ghibly Image Converter",
      "tech": ["FastAPI", "OpenWebUi", "React.js"],
      "duration": "Apr 2025",
      "description": "Project was made as an alternative to chatgpt, image to studio-ghibly like image converter." 
    },
    {
      "title": "Ai Notes and Summarization",
      "tech": ["RAG", "FastAPI", "React.js"],
      "duration": "Mar 2025",
      "description": "The summarization features let's users quickly read through the entire paage, watch long youtube videos and write note associated with them." 
    },
    {
      "title": "Covid-19 Mortality Risk Prediction",
      "tech": ["Jupyter-Lab", "FastAPI", "JS"],
      "duration": "2022",
      "description": "This project focuses on Machine Learning, the data we gathered was from US FDA resources, after EDA we were able to create a model to predict the mortality for a patient." 
    }
  ]
  return (
    <div className={styles.HeroProjects}>
      <h3>Independent Projects:</h3>
        {Projects.map((Project, index) => (
          <HeroProject key={index} {...Project} index={index} />
        ))}
    </div>
  )
}

export default HeroProjects