import template from '../hbs/template.hbs';
import menu from '../menu.json'
//const markUp = template(menu);
const menuUl = document.querySelector('.js-menu');
menuUl.innerHTML = template(menu);
//console.log(markUp);


