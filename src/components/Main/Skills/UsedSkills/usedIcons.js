import './usedIcons.css';
import { skillsUsed } from "../../../../../utils/skillsDev.js";

export const usedSkills = () => {
  const sectionSkills = document.querySelector('#skills');
  const containerUsedSkills = document.createElement('div');
  containerUsedSkills.className = 'div-used-skills';
  sectionSkills.appendChild(containerUsedSkills);
  skillsUsed.forEach(skillsUsed => {
    const imgSkills = document.createElement('img');
    imgSkills.className = 'img-used-skills';
    imgSkills.src = skillsUsed.img;
    imgSkills.alt = skillsUsed.title;
    const textSkills = document.createElement('p');
    textSkills.textContent = skillsUsed.title;
    containerUsedSkills.appendChild(textSkills);
    textSkills.appendChild(imgSkills);
  });
};