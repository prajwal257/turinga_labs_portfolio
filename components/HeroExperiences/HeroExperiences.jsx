import styles from "./HeroExperiences.module.scss";
import HeroExperience from "../HeroExperience/HeroExperience";

function HeroExperiences(systemTheme) {

  const experiences = [
    { 
      "firmName": "IBM India Pvt. Ltd.",
      "title": "Automation Consultant: RPA Developer",
      "time": "Dec 2023 – Present", 
      "location": "Mumbai",
      "copy": "At IBM I developed an AI-driven pipeline that ingests FDA/EMA regulatory docs, parses and normalizes data, and powers a RAG system for pharma R&D.",
      "copyLong": "My work focused on building the ingestion and PDF→text pipelines, entity extraction, embeddings, and dashboards, enabling analysts to query drug data in seconds. I also delivered 14+ UiPath/Python automations for supply chain and finance, cutting manual reporting work significantly.", 
      "skills": "UiPath; Python; SQL; Process Discovery;"
    },
    { 
      "firmName": "Dashamlav.in",
      "title": "Full Stack Developer",
      "time": "Oct 2023 – Nov 2023", 
      "location": "Kanpur",
      "copy": "I developed a fast, SEO-optimized website with Next.js and SCSS, focusing on performance, accessibility, and clean UX.", 
      "copyLong": "The site improved search visibility and doubled traffic in three months, while automated deployments made it easy to update and maintain.",
      "skills": "JavaScript; SCSS; REST APIs;"
    },
    { 
      "firmName": "Petlet.ai",
      "title": "Machine Learning Engineer",
      "time": "Mar 2023 – Sep 2023", 
      "Location": "",
      "copy": "At PETLET I built an end-to-end ML pipeline for pet health prediction, covering data collection, TensorFlow training, and FastAPI inference APIs.", 
      "copyLocation": "I deployed services on AWS with monitoring, integrated outputs into the product frontend, and iterated using vet feedback. The system achieved ~80% accuracy on validation sets and supported early health recommendations for users.",
      "skills": "Python; TensorFlow; Scikit-learn; FastAPI;"
    }
  ];
  

  return (
    <div className={styles.HeroExperiences}>
      <h3>Work Experiences:</h3>
      <div className={styles.ExperiencesList}>
        {experiences.map((experience, index) => (
          <HeroExperience
            key={index}
            {...experience}
            index={index}
            ref={(el) => (experiencesRef.current[index] = el)} // Store refs correctly
            className={styles.experienceContainer}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroExperiences;
