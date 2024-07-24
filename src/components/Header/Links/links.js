import './links.css';
import { linksNavBar } from "../../../../utils/linksNavBar.js";

export const links = () => {
  const ulNav = document.querySelector(".ul-nav-header");
  const liNav = document.createElement('li');
  liNav.className = 'li-ul-nav-header';
  ulNav.appendChild(liNav);

  for (const array of linksNavBar) {
    const aNav = document.createElement('a');
    aNav.className = array.class;
    aNav.href = array.href;
    aNav.textContent = array.title;
    liNav.appendChild(aNav);

    aNav.addEventListener('mouseover', (e) => {
      e.target.innerHTML = array.titleEn;
      setTimeout(() => {e.target.innerHTML = array.title}, 5000)
    });
  };
};