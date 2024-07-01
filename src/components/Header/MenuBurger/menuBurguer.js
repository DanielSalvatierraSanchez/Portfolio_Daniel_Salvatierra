import './menuBurguer.css';
import { linksNavBar } from "../../../../utils/linksNavBar.js";

export const MenuBurguer = () => {
  const main = document.querySelector('#main');
  const header = document.querySelector('#header');
  const buttonOpen = document.createElement('button');
  buttonOpen.id = 'open';
  buttonOpen.className = 'button-open';
  const imgOpen = document.createElement('img');
  imgOpen.className = 'img-open';
  imgOpen.src = './menuopen.webp';
  imgOpen.alt = 'Abrir';
  const navMenu = document.createElement('nav');
  navMenu.id = 'nav';
  navMenu.className = 'nav-menu';
  const buttonClose = document.createElement('button');
  buttonClose.id = 'close';
  buttonClose.className = 'button-close';
  const imgClose = document.createElement('img');
  imgClose.className = 'img-close';
  imgClose.src = './menuclose.webp';
  imgClose.alt = 'Cerrar';
  const ulMenu = document.createElement('ul');
  ulMenu.className = 'ul-menu';
  const liMenu = document.createElement('li');
  liMenu.className = 'li-menu';

  for (const array of linksNavBar) {
    const linkNav = document.createElement('a');
    linkNav.className = array.class;
    linkNav.href = array.href;
    linkNav.textContent = array.title;
    liMenu.appendChild(linkNav);
    
    linkNav.addEventListener('mouseover', (e) => {
      e.target.innerHTML = array.titleEn;
      setTimeout(() => {e.target.innerHTML = array.title}, 5000)
    });
    linkNav.addEventListener('click', () => {
      navMenu.classList.remove('visible');
    });
  }

  header.append(buttonOpen, navMenu);
  buttonOpen.append(imgOpen);
  buttonClose.append(imgClose);
  navMenu.append(buttonClose, ulMenu);
  ulMenu.append(liMenu);

  buttonOpen.addEventListener("mouseover", () => {
    navMenu.classList.add('visible');
  });
  buttonClose.addEventListener("click", () => {
    navMenu.classList.remove('visible');
  });
}