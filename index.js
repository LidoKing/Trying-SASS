//DOM elements
const body = document.body;
const light = document.getElementById('light');
const dark = document.getElementById('dark');

//change class of body tag on click
light.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};

dark.onclick = () => {
  body.classList.replace('light','dark')
  localStorage.setItem('theme', 'dark');
};

//local storage, apply cached theme on reload
const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}
