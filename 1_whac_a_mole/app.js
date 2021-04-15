const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');

const timer = document.querySelector('#timer');
const score = document.querySelector('#score');

let timerId = null;
let result = 0
let currentTime = 10
let molePostion = null;

function moleHit() {
  score.innerHTML = result++;
  randomSquare();
}

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole');
  molePostion = randomSquare.id;
}

function moveMole() {
  return setInterval(randomSquare, 1000);
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id === molePostion) {
      moleHit();
    }
  })
})

let countDownTimerId = setInterval(countDown, 1000);

function countDown() {
  currentTime--;
  timer.textContent = currentTime

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("Game over! Your final score: " + result);
  }
}


timerId = moveMole();