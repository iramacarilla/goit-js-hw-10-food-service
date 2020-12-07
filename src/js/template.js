import template from '../hbs/template.hbs';
import menu from '../menu.json'
const menuUl = document.querySelector('.js-menu');
menuUl.innerHTML = template(menu);



