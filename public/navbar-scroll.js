const nav = document.getElementsByTagName('nav')[0];

const body1 = document.documentElement;
const body2 = document.body;

window.onscroll = () => {
  if (body1.scrollTop >= 100 || body2.scrollTop >= 100) {
    nav.style.background = 'black';
  } else {
    nav.style.background = 'transparent';
  }
}
