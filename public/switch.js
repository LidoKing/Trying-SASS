const checkbox = document.getElementById('checkbox');
const card = document.getElementById('card-inner');

checkbox.onclick = () => {
  if (checkbox.checked == true) {
    card.style.transform = 'rotateY(180deg)';
  } else {
    card.style.transform = "rotateY(0deg)";
  }
}
