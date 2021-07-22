const game = {
  button: {
    rock: document.querySelector('.rock'),
    scissors: document.querySelector('.scissors'),
    paper: document.querySelector('.paper'),
    start: document.querySelector('.start')
  },
  player: document.querySelector('.player-img'),
  comp: document.querySelector('.comp-img'),
  playerScore: document.querySelector('.player-score'),
  compScore: document.querySelector('.comp-score'),
  playerChoice: 1,
  compChoice: 1

}
// var obj = {
//   a : "foo",
//   b(){ return this.a; }
// };
// console.log(obj.b()); // "foo"

game.button.rock.addEventListener('click', addChoice);
game.button.scissors.addEventListener('click', addChoice);
game.button.paper.addEventListener('click', addChoice);

function addChoice() {
  // console.log(this);
  this.classList.toggle('active');

  for (let btn in game.button) {
    if (game.button[btn].classList.contains('active') && game.button[btn] !== this) {
      game.button[btn].classList.remove('active');
    }
  }
  // console.log(this.classList);
  (this.classList.contains('rock')) ? game.playerChoice = 1 :
    (this.classList.contains('scissors')) ? game.playerChoice = 2 : game.playerChoice = 3;
  // console.log(game.playerChoice);
}

game.button.start.addEventListener('click', beginGame);

function beginGame() {
  game.compChoice = Math.floor(Math.random() * 3) + 1;

  // console.log(game.playerChoice + ' - player');
  // console.log(game.compChoice + ' - comp');
}