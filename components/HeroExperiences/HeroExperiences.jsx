import styles from "./HeroExperiences.module.scss";
import HeroExperience from "../HeroExperience/HeroExperience";

function HeroExperiences() {

  const experiences = [
    { 
      "firmName": "IBM India Pvt. Ltd.",
      "title": "Automation Consultant: RPA Developer",
      "time": "Feb 2024 – Present", 
      "copy": "Leading end-to-end RPA solutions using UiPath to automate repetitive business workflows for SunPharma. Collaborated with stakeholders to identify automation candidates and deliver high-impact solutions in a regulated environment.", 
      "skills": "UiPath; Python; SQL; Process Discovery;"
    },
    { 
      "firmName": "Dashamlav.in",
      "title": "Full Stack Developer",
      "time": "Oct 2023 – Nov 2023", 
      "copy": "Worked on a data-driven web dashboard for climate analytics. Built and deployed frontend components with SCSS and JavaScript, and integrated APIs for real-time data visualization.", 
      "skills": "JavaScript; SCSS; REST APIs;"
    },
    { 
      "firmName": "Petlet.ai",
      "title": "Machine Learning Engineer",
      "time": "Mar 2023 – Sep 2023", 
      "copy": "Designed and trained ML models for image classification and recommendation systems in a pet-care domain startup. Focused on model accuracy, dataset handling, and inference pipeline deployment.", 
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
