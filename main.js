const playerContainer1 = document.querySelector(".player-1-container");
const playerContainer2 = document.querySelector(".player-2-container");
const playerScore1 = document.getElementById("player1-score");
const playerScore2 = document.getElementById("player2-score");
const rollScore1 = document.getElementById("roll-diceScore-1");
const rollScore2 = document.getElementById("roll-diceScore-2");
const holdBtn = document.getElementById("hold");
const rollBtn = document.getElementById("roll");
const resetBtn = document.getElementById("reset");
const dice = document.getElementById("dice-img");
const diceContainer = document.getElementById("dice");
let randomDice;
let player = 0;
let rollCount = 0;
let playerCount1 = 0;
let playerCount2 = 0;
function randomNumber() {
  return Math.trunc(Math.random() * 6 + 1);
}

function init() {
  player = 0;
  rollCount = 0;
  playerCount1 = 0;
  playerCount2 = 0;
  playerScore1.innerHTML = 0;
  playerScore2.innerHTML = 0;
  rollScore1.innerHTML = 0;
  rollScore2.innerHTML = 0;
  dice.src = "";
  dice.style.display = "none";
  playerContainer1.classList.remove("final");
  playerContainer2.classList.remove("final");
  document.getElementById("player-title1").classList.remove("final-title");
  document.getElementById("player-title2").classList.remove("final-title");
}
rollBtn.addEventListener("click", function (event) {
  if (playerCount1 >= 100 || playerCount2 >= 100) return;
  dice.style.display = "block";
  randomDice = randomNumber();
  console.log(randomDice);
  dice.src = `dice-${randomDice}.png`;
  if (randomDice === 1) {
    rollCount = 0;
    console.log(rollCount, "randomDice ==1");
    rollScore1.innerHTML = rollCount;
    rollScore2.innerHTML = rollCount;
    player = (player + 1) % 2;
    if (player == 0) {
      playerContainer1.classList.add("active");
      playerContainer2.classList.remove("active");
    } else {
      playerContainer1.classList.remove("active");
      playerContainer2.classList.add("active");
    }
  } else {
    rollCount += randomDice;
    if (player == 0) {
      rollScore1.innerHTML = rollCount;
    } else {
      rollScore2.innerHTML = rollCount;
    }
  }
});

holdBtn.addEventListener("click", function (event) {
  // grap the value in the rollCount and add it ot the score
  if (playerCount1 >= 100 || playerCount2 >= 100) return;

  if (player == 0) {
    playerCount1 += rollCount;
    playerScore1.innerHTML = playerCount1;
    rollScore1.innerHTML = 0;
  } else {
    playerCount2 += rollCount;
    playerScore2.innerHTML = playerCount2;
    rollScore2.innerHTML = 0;
  }
  if (playerCount1 < 100 && playerCount2 < 100) {
    rollCount = 0;
    player = (player + 1) % 2;
    if (player == 0) {
      playerContainer1.classList.add("active");
      playerContainer2.classList.remove("active");
      // rollScore1.innerHTML = rollCount;
    } else {
      playerContainer1.classList.remove("active");
      playerContainer2.classList.add("active");
      // rollScore2.innerHTML = rollCount;
    }
  } else {
    if (player == 0) {
      playerContainer1.classList.add("final");
      document.getElementById("player-title1").classList.add("final-title");
    } else {
      playerContainer2.classList.add("final");
      document.getElementById("player-title2").classList.add("final-title");
    }
  }
  // clear the rollcount filed
  // change the player
});

window.onload = function (event) {
  init();
};

resetBtn.addEventListener("click", function (event) {
  init();
});
