import './training.css';
import { education } from "../../../../../utils/education.js";

export const Training = () => {
  const articleTraining = document.querySelector('#training');
  const containerTraining = document.createElement('div');
  containerTraining.className = 'container-training';
  articleTraining.appendChild(containerTraining);
  education.forEach(education => {
    const imgTraining = document.createElement('img');
    imgTraining.className = 'img-training';
    imgTraining.src = education.src;
    imgTraining.alt = education.title;
    const textTraining = document.createElement('p');
    textTraining.className = 'text-training';
    textTraining.textContent = education.title;
    containerTraining.appendChild(textTraining);
    textTraining.appendChild(imgTraining);
  });
};