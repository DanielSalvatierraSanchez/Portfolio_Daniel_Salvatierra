import './cards.css';
import { projects } from "../../../../../utils/projects.js";

export const cardOfProject = () => {
  const cardsProjects = document.querySelector('#cards-projects');
  projects.forEach(projects => {
    const articleProjects = document.createElement('article');
    articleProjects.className = 'article-projects';
    const imgProject = document.createElement('img');
    imgProject.className = 'img-project';
    imgProject.src = projects.image;
    imgProject.href = projects.url;

    const titleProject = document.createElement('h4');
    titleProject.className = 'title-project';
    titleProject.textContent = projects.title;
    const textProject = document.createElement('p');
    textProject.className = 'text-project';
    textProject.textContent = projects.text;

    const linksProject = document.createElement('div');
    linksProject.className = 'links-project';
    const githubLinkProject = document.createElement('a');
    githubLinkProject.className = 'github-link-project';
    githubLinkProject.href = projects.link;
    githubLinkProject.target = projects.target;
    const githubImgProject = document.createElement('img');
    githubImgProject.className = 'github-img-project';
    githubImgProject.src = './github.webp';
    
    const webLinkProject = document.createElement('a');
    webLinkProject.className = 'web-link-project';
    webLinkProject.href = projects.url;
    webLinkProject.target = projects.target;
    const webImgProject = document.createElement('img');
    webImgProject.className = 'web-img-project';
    webImgProject.src = './web.webp';
    
    cardsProjects.appendChild(articleProjects);
    articleProjects.append(imgProject, titleProject, textProject, linksProject);
    linksProject.append(githubLinkProject, webLinkProject);
    githubLinkProject.appendChild(githubImgProject);
    webLinkProject.appendChild(webImgProject);

    textProject.addEventListener('mouseover', () => {
      titleProject.textContent = projects.titleEn;
      textProject.textContent = projects.textEn;
      setTimeout(() => {
        textProject.textContent = projects.text;
        titleProject.textContent = projects.title;
      }, 10000)
    });
  });
};