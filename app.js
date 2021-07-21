const button = {
  rock: document.querySelector('.rock'),
  scissors: document.querySelector('.scissors'),
  paper: document.querySelector('.paper'),
  start: document.querySelector('.start'),
  choice: this.addEventListener('click', () => {
    for(let btn in button) {
      if (button[btn].classList.contains("active")) {
        console.log(button[btn].className);
        button[btn].classList.remove('active');
      }
    }
    button[this].classList.toggle('active');
  })
}

// button.rock.addEventListener('click', addChoice);
// button.scissors.addEventListener('click', addChoice);
// button.paper.addEventListener('click', addChoice);

// function addChoice() {
//   // e.preventDefault();
//   console.log(button[this].className);
//   button[this].classList.toggle('active');
//   for(let btn in button) {
//     if (button[btn].classList.contains("active")) {
//       console.log(button[btn].className);
//     }
//     button[btn].classList.remove('active');
//   }
// }