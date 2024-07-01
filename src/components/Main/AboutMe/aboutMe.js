import './aboutMe.css';
import { data } from "../../../../utils/data.js";

// crear function del About Me y crear event
export const AboutMe = () => {
  const sectionAboutMe = document.createElement('section');
  sectionAboutMe.id = 'aboutme';
  const titleAboutMe = document.createElement('h2');
  titleAboutMe.id = 'title-aboutme';
  titleAboutMe.textContent = 'SOBRE MÍ';
  const textAboutMe = document.createElement('p');
  textAboutMe.className = 'text-aboutme';
  textAboutMe.textContent = data.aboutMe;
  main.appendChild(sectionAboutMe);
  sectionAboutMe.append(titleAboutMe, textAboutMe);

  // crear event para cambiar idioma
  textAboutMe.addEventListener('mouseover', () => {
    titleAboutMe.textContent = 'ABOUT ME';
    textAboutMe.textContent = data.aboutMeEn;
    setTimeout(() => {
      titleAboutMe.textContent = 'SOBRE MÍ';
      textAboutMe.textContent = data.aboutMe;
    }, 10000);
  });
};