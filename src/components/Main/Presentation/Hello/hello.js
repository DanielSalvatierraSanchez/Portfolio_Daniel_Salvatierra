import './hello.css';
import { data } from "../../../../../utils/data.js";
import { education } from "../../../../../utils/education.js";

export const presentationHello = () => {
  const sectionPresentation = document.querySelector('#presentation');
  const articleHello = document.createElement('article');
  articleHello.id = 'hello';
  const h2Presentation = document.createElement('h2');
  h2Presentation.className = 'h2-presentation';
  h2Presentation.textContent = data.intro;
  const h1Presentation = document.createElement('h1');
  h1Presentation.className = 'h1-presentation';
  h1Presentation.textContent = data.name;
  const h3Presentation = document.createElement('h2');
  h3Presentation.className = 'h3-presentation';
  h3Presentation.textContent = education[0].title;
  const ulPresentation = document.createElement('ul');
  ulPresentation.className = 'ul-presentation';
  
  for (const rrss of data.rrss) {
    const li = document.createElement('li');
    li.className = rrss.classLink
    const a = document.createElement('a');
    a.href = rrss.href;
    a.target = rrss.target;
    const img = document.createElement('img');
    img.className = rrss.classImg;
    img.src = rrss.src;
    ulPresentation.appendChild(li);
    li.appendChild(a);
    a.appendChild(img);
  };
  
  const pPresentation = document.createElement('p');
  pPresentation.className = 'p-presentation';
  pPresentation.textContent = data.value;
  sectionPresentation.appendChild(articleHello);
  articleHello.append(h2Presentation, h1Presentation, h3Presentation, ulPresentation, pPresentation);

  articleHello.addEventListener('mouseover', () => {
    h2Presentation.textContent = data.introEn;
    pPresentation.textContent = data.valueEn;
    setTimeout(() => {
      h2Presentation.textContent = data.intro;
      pPresentation.textContent = data.value;
    }, 10000);
  });
};