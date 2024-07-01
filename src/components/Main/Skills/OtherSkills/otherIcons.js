import './otherIcons.css';
import { skillsOther } from "../../../../../utils/skillsDev.js";

export const otherSkills = () => {
  const sectionSkills = document.querySelector('#skills');
  const containerOtherSkills = document.createElement('div');
  containerOtherSkills.className = 'div-other-skills';
  sectionSkills.appendChild(containerOtherSkills);
  skillsOther.forEach(skillsOther => {
    const imgSkills = document.createElement('img');
    imgSkills.className = 'img-other-skills';
    imgSkills.src = skillsOther.img;
    imgSkills.alt = skillsOther.title;
    const textSkills = document.createElement('p');
    textSkills.textContent = skillsOther.text;
    containerOtherSkills.appendChild(textSkills);
    textSkills.appendChild(imgSkills);
  });
};