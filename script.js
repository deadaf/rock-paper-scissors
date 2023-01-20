const gameOptions = Array.from(document.getElementsByClassName("gameOption"));

const options = [
  {
    type: "rock",
    losesTo: "paper",
    emoji: "🪨",
  },
  {
    type: "paper",
    losesTo: "scissors",
    emoji: "📄",
  },
  {
    type: "scissors",
    losesTo: "rock",
    emoji: "✂️",
  },
];

let userScore = 0;
let compScore = 0;
let gameStarted = false;

function getComputerChoice() {
  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameOptions.length);
    computerSelection = gameOptions[randomIndex].type;
    const consoleEmoji = gameOptions[randomIndex].emoji;
    console.log("Computer chose: " + computerSelection + consoleEmoji);
    chosenOptionEmoji[0].innerText = consoleEmoji;
  }
  const randomIndex = Math.floor(Math.random() * options.length);
  computerSelection = options[randomIndex].type;
  const consoleEmoji = options[randomIndex].emoji;
  console.log("Computer chose: " + computerSelection + consoleEmoji);
  //   chosenOptionEmoji[0].innerText = consoleEmoji;
  return randomIndex;
}

gameOptions.forEach((btn) => {
  btn.addEventListener("click", newInput);
});

function newInput(btn) {
  if (!gameStarted) {
    gameStarted = true;
    let chooseBtn = document.getElementById("chooseOneBtn");
    chooseBtn.innerHTML = "<h3>Restart Game?<h3>";
    chooseBtn.addEventListener("click", restartGame);
  }

  userInput = btn.target.id;
  compInput = options[getComputerChoice()];

  if (compInput.type == userInput) {
    console.log("tie");
  } else if (compInput.losesTo == userInput) {
    let userScoreEl = document.getElementById("userScore");
    userScore += 1;
    userScoreEl.innerText = userScore;
  } else {
    let compScoreEl = document.getElementById("compScore");
    compScore += 1;
    compScoreEl.innerText = compScore;
  }
}

function restartGame(e) {
  e.target.innerText = "Choose One!";
  compScore = 0;
  userScore = 0;
  document.getElementById("userScore").innerText = compScore;
  document.getElementById("compScore").innerText = compScore;
}
