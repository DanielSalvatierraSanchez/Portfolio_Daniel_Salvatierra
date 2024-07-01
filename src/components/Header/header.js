import './header.css';
import { links } from "./Links/links.js";

// crear HEADER
export const Header = () => {
  const header = document.createElement('header');
  header.id = 'header';
  main.appendChild(header);
};

// crear NAV con una UL e importar funtion links con los LI y el resto de elementos
export const NavBar = () => {
  const header = document.querySelector('#header');
  const nav = document.createElement('nav');
  nav.id = 'nav-bar';
  const ulNav = document.createElement('ul');
  ulNav.className = 'ul-nav-header';
  header.appendChild(nav);
  nav.appendChild(ulNav);
  links();
};