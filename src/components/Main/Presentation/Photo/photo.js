import './photo.css';
import { data } from "../../../../../utils/data.js";

export const presentationPhoto = () => {
  const sectionPresentation = document.querySelector('#presentation');
  const articlePhoto = document.createElement('article');
  articlePhoto.id = 'photo';
  const photoPersonal = document.createElement('img');
  photoPersonal.className = 'photo-personal';
  photoPersonal.src = data.photo;
  photoPersonal.alt = "Foto de Daniel Salvatierra";
  sectionPresentation.appendChild(articlePhoto);
  articlePhoto.appendChild(photoPersonal);
  
  photoPersonal.addEventListener('click', () => {
    photoPersonal.src = data.photoFake;
    photoPersonal.addEventListener('mouseout', () => {
      photoPersonal.src = data.photo;
    });
  });
};