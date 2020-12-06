const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeCheckbox: document.querySelector('#theme-switch-toggle'),
};

const setTheme = () => {
  if (localStorage.getItem('theme') === Theme.DARK) {
    refs.themeCheckbox.checked = true;
    refs.body.classList.add(Theme.DARK);
  }
};

const changeTheme = () => {
  if (refs.themeCheckbox.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

setTheme();
refs.themeCheckbox.addEventListener('change', changeTheme)
