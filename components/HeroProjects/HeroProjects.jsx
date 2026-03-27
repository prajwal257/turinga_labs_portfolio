"use client"
import React from 'react'
import styles from "./HeroProjects.module.scss"
import HeroProject from '../HeroProject/HeroProject'
import Link from 'next/link'

function HeroProjects() {

  const Projects = [
    {
      "title": "Studio Ghibly Image Converter",
      "tech": ["ComfyUI", " FastAPI"],
      "duration": "Apr 2025",
      "description": "I designed a FastAPI service that applies Studio Ghibli–inspired LoRA styles to input images. The pipeline supports prompt templating, batch generation, and metadata logging on a self-hosted GPU, demonstrating practical MLOps for generative AI." 
    },
    {
      "title": "Interview Intelligence: AI Audio Analyst",
      "tech": ["Whisper", " FastAPI", " React.js", " LLaMA 8B"],
      "duration": "Mar 2026",
      "description": "Drop in an interview recording, get a full candidate report in seconds. Produces multi-dimensional scoring across technical depth, communication clarity, and problem solving — with radar charts, behavioral hesitation signals, topic sentiment, and a timestamped interview timeline. Built on a RAG pipeline with FastAPI and React."
    },
    {
      "title": "FineTuning Gemma3 1-B on RTX 4050",
      "tech": ["PyTorch", "CUDA", "Obsidian"],
      "duration": "Mar 2026",
      "description": "Fine-tuned Gemma 3 1B on ~200 handwritten Obsidian notes using QLoRA on a 6GB GPU (RTX 4050)." 
    }
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