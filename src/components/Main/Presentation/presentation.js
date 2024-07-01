import './presentation.css';
import { presentationHello } from './Hello/hello';
import { presentationPhoto } from './Photo/photo';

// crear la presentacion del portfolio y añadir 2 funtions
export const Presentation = () => {
  const sectionPresentation = document.createElement('section');
  sectionPresentation.id = 'presentation';
  main.appendChild(sectionPresentation);
  presentationHello();
  presentationPhoto();
};