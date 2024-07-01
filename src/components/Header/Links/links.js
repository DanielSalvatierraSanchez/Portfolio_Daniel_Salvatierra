import './links.css';
import { linksNavBar } from "../../../../utils/linksNavBar.js";

// crear VAR que hace referencia a los LI que almacenare en el UL creado en Header
export const links = () => {
  const ulNav = document.querySelector(".ul-nav-header");
  const liNav = document.createElement('li');
  liNav.className = 'li-ul-nav-header';
  ulNav.appendChild(liNav);

  // utilizar FOR OF para recorrer array de los links que quiero usar en el Header
  for (const array of linksNavBar) {
    const aNav = document.createElement('a');
    aNav.className = array.class;
    aNav.href = array.href;
    aNav.textContent = array.title;
    liNav.appendChild(aNav);

    // crear event para cambiar idioma
    aNav.addEventListener('mouseover', (e) => {
      e.target.innerHTML = array.titleEn;
      setTimeout(() => {e.target.innerHTML = array.title}, 5000)
    });
  };
};