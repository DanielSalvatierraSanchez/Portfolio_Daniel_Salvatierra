import './experience.css';
import { Training } from "./Training/training.js";
import { WorkExperience, Customers } from "./WorkExperience/workExperience.js";

export const Experience = () => {
  const sectionExperience = document.createElement('section');
  sectionExperience.id = 'experience';
  const titleExperience = document.createElement('h2');
  titleExperience.className = 'title-experience';
  titleExperience.href = '#experience';
  titleExperience.textContent = 'EXPERIENCIA';
  main.appendChild(sectionExperience);
  sectionExperience.appendChild(titleExperience);

  const articleTraining = document.createElement('article');
  articleTraining.id = 'training';
  const titleTraining = document.createElement('h2');
  titleTraining.className = 'title-training';
  titleTraining.textContent = 'Formación laboral:';
  sectionExperience.append(titleTraining, articleTraining);
  Training();
  
  const articleWorkExperience = document.createElement('article');
  articleWorkExperience.id = 'work-experience';
  const titleWorkExperience = document.createElement('h2');
  titleWorkExperience.className = 'title-work-experience';
  titleWorkExperience.textContent = 'Experiencia laboral:';
  sectionExperience.append(titleWorkExperience, articleWorkExperience);
  Customers();
  WorkExperience();

  // crear event para cambiar idioma
  articleTraining.addEventListener('mouseover', () => {
    titleExperience.textContent = 'EXPERIENCE';
    titleTraining.textContent = 'Job training:';
    titleWorkExperience.textContent = 'Work experience:';
    setTimeout(() => {
      titleExperience.textContent = 'EXPERIENCIA';
      titleTraining.textContent = 'Formación laboral:';
      titleWorkExperience.textContent = 'Experiencia laboral:';
    }, 10000);
  });
};