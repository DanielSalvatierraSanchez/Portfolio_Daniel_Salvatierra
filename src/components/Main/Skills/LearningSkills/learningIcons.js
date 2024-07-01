import './learningIcons.css';
import { skillsLearning } from "../../../../../utils/skillsDev.js";

export const learningSkills = () => {
  const sectionSkills = document.querySelector('#skills');
  const containerLearningSkills = document.createElement('div');
  containerLearningSkills.className = 'div-learning-skills';
  sectionSkills.appendChild(containerLearningSkills);
  skillsLearning.forEach(skillsLearning => {
    const imgSkills = document.createElement('img');
    imgSkills.className = 'img-learning-skills';
    imgSkills.src = skillsLearning.img;
    imgSkills.alt = skillsLearning.title;
    const textSkills = document.createElement('p');
    textSkills.textContent = skillsLearning.title;
    containerLearningSkills.appendChild(textSkills);
    textSkills.appendChild(imgSkills);
  });
};