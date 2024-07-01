import './workExperience.css';
import { companies } from "../../../../../utils/companies.js";
import { customers } from "../../../../../utils/customers.js";

export const WorkExperience = () => {
  const articleWorkExperience = document.querySelector('#work-experience');
  const containerWorkExperience = document.createElement('div');
  containerWorkExperience.className = 'container-work-experience';
  articleWorkExperience.appendChild(containerWorkExperience);

  for(const company of companies) {
    const imgWorkExperience = document.createElement('img');
    imgWorkExperience.className = 'img-work-experience';
    imgWorkExperience.src = company.image;
    imgWorkExperience.alt = company.name;
    const nameWorkExperience = document.createElement('h3');
    nameWorkExperience.className = 'name-work-experience';
    nameWorkExperience.textContent = company.name;
    const timeWorkExperience = document.createElement('h4');
    timeWorkExperience.className = 'time-work-experience';
    timeWorkExperience.textContent = company.time;
    const textWorkExperience = document.createElement('p');
    textWorkExperience.className = 'text-work-experience';
    textWorkExperience.textContent = company.description;
    containerWorkExperience.append(timeWorkExperience, textWorkExperience);
    timeWorkExperience.append(nameWorkExperience, imgWorkExperience);

    textWorkExperience.addEventListener('mouseover', (e) => {
      e.target.innerHTML = company.descriptionEn;
      setTimeout(() => {e.target.innerHTML = company.description}, 10000)
    });
  };
};

export const Customers = () => {
  const articleWorkExperience = document.querySelector('#work-experience');
  const containerCustomers = document.createElement('div');
  containerCustomers.className = 'container-customers';
  articleWorkExperience.appendChild(containerCustomers);
  customers.forEach(customers => {
  const imgCustomers = document.createElement('img');
  imgCustomers.className = 'img-customers';
  imgCustomers.src = customers.src;
  imgCustomers.alt = customers.alt;
  containerCustomers.appendChild(imgCustomers);
  });
};