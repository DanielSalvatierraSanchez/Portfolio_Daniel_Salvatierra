import './style.css';
import { Header, NavBar } from "./src/components/Header/header.js";
import { MenuBurguer } from "./src/components/Header/MenuBurger/menuBurguer.js";
import { Presentation } from "./src/components/Main/Presentation/presentation.js";
import { AboutMe } from "./src/components/Main/AboutMe/aboutMe.js";
import { Skills } from "./src/components/Main/Skills/skills.js";
import { Projects } from "./src/components/Main/Projects/projects.js";
import { Experience } from "./src/components/Main/Experience/experience.js";
import { Footer } from "./src/components/Footer/footer.js";

const main = document.createElement('main');
main.id = 'main';
document.body.appendChild(main);

Header();
NavBar();
MenuBurguer();
Presentation();
AboutMe();
Skills();
Projects();
Experience();
Footer();