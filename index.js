//DOM elements
const body = document.body;
const light = document.getElementById('light');
const dark = document.getElementById('dark');

//change class of body tag on click
light.onclick = () => {
  body.classList.replace('dark', 'light')
};

dark.onclick = () => {
  body.classList.replace('light','dark')
};
