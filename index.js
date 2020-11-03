//DOM elements
const body = document.body;
const changeTheme = document.getElementById('toggle');

//change class of body tag on click
changeTheme.onclick = () => {
  if (body.classList == 'light') {
    body.classList.replace('light','dark');

    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark','light');
    localStorage.setItem('theme', 'light');

  }
}

//local storage, apply cached theme on reload
const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}
