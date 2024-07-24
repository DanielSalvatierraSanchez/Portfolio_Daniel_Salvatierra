import './skills.css';
import { usedSkills } from "./UsedSkills/usedIcons.js";
import { learningSkills } from './LearningSkills/learningIcons.js';
import { otherSkills } from "./OtherSkills/otherIcons.js";

export const Skills = () => {
  const sectionSkills = document.createElement('section');
  sectionSkills.id = 'skills';
  const titleSkills = document.createElement('h2');
  titleSkills.className = 'title-skills';
  titleSkills.textContent = 'SKILLS';
  main.appendChild(sectionSkills);
  sectionSkills.appendChild(titleSkills);
  usedSkills();

  const titleLearning = document.createElement('h2');
  titleLearning.className = 'title-learning';
  titleLearning.textContent = 'En proceso de aprendizaje:';
  sectionSkills.appendChild(titleLearning);
  learningSkills();
  
  const titleOther = document.createElement('h2');
  titleOther.className = 'title-other';
  titleOther.textContent = 'Otras skills:';
  sectionSkills.appendChild(titleOther);
  otherSkills();

  titleLearning.addEventListener('mouseover', () => {
    titleLearning.textContent = 'In learning process:';
    titleOther.textContent = 'Other skills:';
    setTimeout(() => {
      titleLearning.textContent = 'En proceso de aprendizaje:';
      titleOther.textContent = 'Otras skills:';
    }, 5000);
    titleOther.addEventListener('mouseover', () => {
      titleLearning.textContent = 'In learning process:';
      titleOther.textContent = 'Other skills:';
      setTimeout(() => {
        titleLearning.textContent = 'En proceso de aprendizaje:';
        titleOther.textContent = 'Otras skills:';
      }, 5000);
    });
  });
};