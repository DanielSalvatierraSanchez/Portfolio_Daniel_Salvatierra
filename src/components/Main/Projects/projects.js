import './projects.css';
import { cardOfProject } from "./Cards/cards.js";

export const Projects = () => {
  const sectionProjects = document.createElement('section');
  sectionProjects.id = 'projects';
  const titleProjects = document.createElement('h2');
  titleProjects.className = 'title-projects';
  titleProjects.textContent = 'PROYECTOS';
  const cardsProjects = document.createElement('div');
  cardsProjects.id = 'cards-projects';
  main.appendChild(sectionProjects);
  sectionProjects.append(titleProjects, cardsProjects);
  cardOfProject();

  titleProjects.addEventListener('mouseover', () => {
    titleProjects.textContent = 'PROJECTS';
    setTimeout(() => {
      titleProjects.textContent = 'PROYECTOS';
    }, 10000);
  });
};