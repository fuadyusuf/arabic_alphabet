const testLetterDiv = document.querySelector('.test-letter');
const minutesSpan = document.querySelector('#mins');
const secondsSpan = document.querySelector('#secs');
const errorTitleEl = document.querySelector('.error-title');
const resultsGridDiv = document.querySelector('.results-grid');
const closeModalEl = document.querySelector('.modal .fa-xmark');
const choiceBoxModalEl = document.querySelector('.choice-letter');
const correctBoxModalEl = document.querySelector('.correct-letter');
const choicePositionModalEl = document.querySelector('.choice-position');
const correctPositionModalEl = document.querySelector('.correct-position');
const testBoxModalEl = document.querySelector('.error-letter');
const testLetterModalSpanPos = document.querySelector('.letterPos');
const testLetterModalSpanSound = document.querySelector('.letterSound');
const correctionOkBtn = document.querySelector('#correctionOK');
const okInfoBtnModalEl = document.querySelector('#okInfo');
const timeTakenSpan = document.querySelector('.timeTaken');
const closeTestBtn = document.getElementById('closeApp');
const restartTestBtn = document.getElementById('restart');
const gameOverDiv = document.querySelector('.modal-container');
const infoModalDiv = document.querySelector('.info');
const erroInfoPara = document.querySelector('.errorInfo');
const gameOverModal = document.querySelector('.game-over');
const correctionModal = document.querySelector('.correction-modal');
const letters = document.querySelectorAll('.box-sm');
const correctNumDiv = document.querySelector('.correctScore');
const wrongNumDiv = document.querySelector('.wrongScore');
const remainingNumDiv = document.querySelector('.remaining');
const scoreBox = document.querySelector('.scoreBox').childNodes;

const crossIcon = createElement('i');
crossIcon.classList = 'fa-solid fa-xmark';
const checkIcon = createElement('i');
checkIcon.classList = 'fa-solid fa-check';

let gameState = true;
let randomNumber;
let randomLetter;
let randomLetterObj;
let position;
let correct = [];
let wrong = [];
let minutes = 00;
let seconds = 00;
let Interval;

//Full Data
const lettersObjectArray = [
  {
    id: 1,
    groupId: 1,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'alif',
    special: true,
  },
  {
    id: 2,
    groupId: 2,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'baa',
    special: false,
  },
  {
    id: 3,
    groupId: 2,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'baa',
    special: false,
  },
  {
    id: 4,
    groupId: 2,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'baa',
    special: false,
  },
  {
    id: 5,
    groupId: 3,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'ta',
    special: false,
  },
  {
    id: 6,
    groupId: 3,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'ta',
    special: false,
  },
  {
    id: 7,
    groupId: 3,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'ta',
    special: false,
  },
  {
    id: 8,
    groupId: 4,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'tha',
    special: false,
  },
  {
    id: 9,
    groupId: 4,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'tha',
    special: false,
  },
  {
    id: 10,
    groupId: 4,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'tha',
    special: false,
  },
  {
    id: 11,
    groupId: 5,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'jiim',
    special: false,
  },
  {
    id: 12,
    groupId: 5,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'jiim',
    special: false,
  },
  {
    id: 13,
    groupId: 5,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'jiim',
    special: false,
  },
  {
    id: 14,
    groupId: 6,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'Ha',
    special: false,
  },
  {
    id: 15,
    groupId: 6,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'Ha',
    special: false,
  },
  {
    id: 16,
    groupId: 6,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'Ha',
    special: false,
  },
  {
    id: 17,
    groupId: 7,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'kha',
    special: false,
  },
  {
    id: 18,
    groupId: 7,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'kha',
    special: false,
  },
  {
    id: 19,
    groupId: 7,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'kha',
    special: false,
  },

  {
    id: 20,
    groupId: 8,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'dal',
    special: true,
  },
  {
    id: 21,
    groupId: 9,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'dthal',
    special: true,
  },
  {
    id: 22,
    groupId: 10,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'ra',
    special: true,
  },

  {
    id: 23,
    groupId: 11,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'za',
    special: true,
  },

  {
    id: 24,
    groupId: 12,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'siin',
    special: false,
  },
  {
    id: 25,
    groupId: 12,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'siin',
    special: false,
  },
  {
    id: 26,
    groupId: 12,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'siin',
    special: false,
  },
  {
    id: 27,
    groupId: 13,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'shiin',
    special: false,
  },
  {
    id: 28,
    groupId: 13,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'shiin',
    special: false,
  },
  {
    id: 29,
    groupId: 13,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'shiin',
    special: false,
  },
  {
    id: 30,
    groupId: 14,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'saad',
    special: false,
  },
  {
    id: 31,
    groupId: 14,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'saad',
    special: false,
  },
  {
    id: 32,
    groupId: 14,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'saad',
    special: false,
  },
  {
    id: 33,
    groupId: 15,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'dhaad',
    special: false,
  },
  {
    id: 34,
    groupId: 15,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'dhaad',
    special: false,
  },
  {
    id: 35,
    groupId: 15,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'dhaad',
    special: false,
  },
  {
    id: 36,
    groupId: 16,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'tda',
    special: false,
  },
  {
    id: 37,
    groupId: 16,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'tda',
    special: false,
  },
  {
    id: 38,
    groupId: 16,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'tda',
    special: false,
  },
  {
    id: 39,
    groupId: 17,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'dha',
    special: false,
  },
  {
    id: 40,
    groupId: 17,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'dha',
    special: false,
  },
  {
    id: 41,
    groupId: 17,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'dha',
    special: false,
  },
  {
    id: 42,
    groupId: 18,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'ayn',
    special: false,
  },
  {
    id: 43,
    groupId: 18,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'ayn',
    special: false,
  },
  {
    id: 44,
    groupId: 18,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'ayn',
    special: false,
  },
  {
    id: 45,
    groupId: 19,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'ghayn',
    special: false,
  },
  {
    id: 46,
    groupId: 19,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'ghayn',
    special: false,
  },
  {
    id: 47,
    groupId: 19,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'ghayn',
    special: false,
  },
  {
    id: 48,
    groupId: 20,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'fa',
    special: false,
  },

  {
    id: 49,
    groupId: 20,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'fa',
    special: false,
  },

  {
    id: 50,
    groupId: 20,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'fa',
    special: false,
  },

  {
    id: 51,
    groupId: 21,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'qaaf',
    special: false,
  },
  {
    id: 52,
    groupId: 21,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'qaaf',
    special: false,
  },
  {
    id: 53,
    groupId: 21,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'qaaf',
    special: false,
  },
  {
    id: 54,
    groupId: 22,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'kaaf',
    special: false,
  },
  {
    id: 55,
    groupId: 22,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'kaaf',
    special: false,
  },
  {
    id: 56,
    groupId: 22,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'kaaf',
    special: false,
  },
  {
    id: 57,
    groupId: 23,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'laam',
    special: false,
  },
  {
    id: 58,
    groupId: 23,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'laam',
    special: false,
  },
  {
    id: 59,
    groupId: 23,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'laam',
    special: false,
  },
  {
    id: 60,
    groupId: 24,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'miim',
    special: false,
  },
  {
    id: 61,
    groupId: 24,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'miim',
    special: false,
  },
  {
    id: 62,
    groupId: 24,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'miim',
    special: false,
  },
  {
    id: 63,
    groupId: 25,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'noon',
    special: false,
  },
  {
    id: 64,
    groupId: 25,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'noon',
    special: false,
  },
  {
    id: 65,
    groupId: 25,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'noon',
    special: false,
  },
  {
    id: 66,
    groupId: 26,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'ha',
    special: false,
  },
  {
    id: 67,
    groupId: 26,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'ha',
    special: false,
  },
  {
    id: 68,
    groupId: 26,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'ha',
    special: false,
  },
  {
    id: 69,
    groupId: 27,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'waaw',
    special: true,
  },
  {
    id: 70,
    groupId: 28,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'ya',
    special: false,
  },
  {
    id: 71,
    groupId: 28,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'ya',
    special: false,
  },
  {
    id: 72,
    groupId: 28,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'ya',
    special: false,
  },
];

//Test Data
/*
const lettersObjectArray = [
  {
    id: 1,
    groupId: 1,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'alif',
    special: true,
  },
  {
    id: 2,
    groupId: 2,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'baa',
    special: false,
  },
  {
    id: 3,
    groupId: 2,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'baa',
    special: false,
  },
  {
    id: 4,
    groupId: 2,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'baa',
    special: false,
  },
  {
    id: 5,
    groupId: 3,
    parent: '???',
    form: '?????',
    position: 'start',
    sound: 'ta',
    special: false,
  },
  {
    id: 6,
    groupId: 3,
    parent: '???',
    form: '???????',
    position: 'mid',
    sound: 'ta',
    special: false,
  },
  {
    id: 7,
    groupId: 3,
    parent: '???',
    form: '?????',
    position: 'end',
    sound: 'ta',
    special: false,
  },
];
*/
(() => {
  letters.forEach((letter) => {
    letter.addEventListener('click', checkAnswer);
  });
  restartTestBtn.addEventListener('click', restartGame);
  closeTestBtn.addEventListener('click', closeTest);
  closeModalEl.addEventListener('click', restartGame);
  okInfoBtnModalEl.addEventListener('click', closeWrongModal);
  correctionOkBtn.addEventListener('click', closeWrongModal);
  window.addEventListener('load', checkGameState);
  startTimer();
})();

function startTimer() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);

  seconds++;

  if (seconds <= 9) {
    secondsSpan.innerHTML = '0' + seconds;
  }

  if (seconds > 9) {
    secondsSpan.innerHTML = seconds;
  }

  if (seconds > 59) {
    minutes++;
    minutesSpan.innerHTML = '0' + minutes;
    seconds = 0;
    secondsSpan.innerHTML = '0' + 0;
  }

  if (minutes > 9) {
    minutesSpan.innerHTML = minutes;
  }
}

function stopTimer() {
  clearInterval(Interval);
}

function resetTimer() {
  clearInterval(Interval);
  seconds = '00';
  minutes = '00';
  secondsSpan.innerHTML = seconds;
  minutesSpan.innerHTML = minutes;
}

function showScore() {
  scoreBox.forEach((div) => {
    div.textContent = '';
  });
  correctNumDiv.innerHTML = checkIcon.outerHTML + Number(correct.length);
  wrongNumDiv.innerHTML = crossIcon.outerHTML + Number(wrong.length);
  remainingNumDiv.textContent =
    Number(lettersObjectArray.length) - Number(correct.length);
}

function closeTest() {
  window.location = 'http://google.com/';
}

function displayScore(num1, num2) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';
  const total = num1 + num2;
  const topNum = document.createElement('span');
  const divider = document.createElement('span');
  const totalNum = document.createElement('span');
  const containerDiv = createElement('div');

  topNum.textContent = 'Errors: ' + num2;

  containerDiv.appendChild(topNum);
  containerDiv.appendChild(divider);
  containerDiv.appendChild(totalNum);

  resultDiv.appendChild(containerDiv);
}

function displayWrong(e) {
  const wrongLetter = wrong[wrong.length - 1];
  const wrongLetterId = wrongLetter.id;
  let wrongLetterDiv;
  let count = 0;

  errorTitleEl.style.display = 'block';

  wrong.forEach((letter) => {
    if (letter === wrongLetter) {
      count += 1;
    }
  });

  if (count <= 1) {
    wrongLetterDiv = createWrongLetterDiv(e, wrongLetter);
    resultsGridDiv.appendChild(wrongLetterDiv);
  }

  if (count > 1) {
    const existingWrongLetters = resultsGridDiv.children;
    for (let i = 0; i < existingWrongLetters.length; i++) {
      if (existingWrongLetters[i].childNodes[1].id == wrongLetterId) {
        const countBubble = createElement('div');
        countBubble.classList = 'count';
        countBubble.textContent = count;
        existingWrongLetters[i].childNodes[1].appendChild(countBubble);

        const chosenLetterDiv = createElement('div');
        chosenLetterDiv.classList = 'error';
        chosenLetterDiv.textContent = e.target.textContent;
        chosenLetterDiv.classList = 'box-sm red mb-1';
        existingWrongLetters[i].appendChild(chosenLetterDiv);
      }
    }
  }
}

function createWrongLetterDiv(e, letterObj) {
  const errorContainer = createElement('div');
  const correctLetterDiv = createElement('div');
  const wrongLetterPosition = createElement('span');
  const correctLetterSound = createElement('span');
  const chosenPositionSpan = createElement('span');
  const wrongLetterDiv = createElement('div');
  const chosenLetterDiv = createElement('div');
  chosenPositionSpan.textContent = position;
  chosenLetterDiv.classList = 'error';
  chosenLetterDiv.textContent = e.target.textContent;
  chosenLetterDiv.classList = 'box-sm red mb-1';
  chosenLetterDiv.appendChild(chosenPositionSpan);
  wrongLetterPosition.textContent = letterObj.position;
  correctLetterSound.textContent = letterObj.sound;
  correctLetterDiv.textContent = letterObj.parent;
  errorContainer.classList = 'error';
  errorContainer.id = letterObj.id;
  correctLetterDiv.classList = 'box-sm green';
  wrongLetterDiv.id = randomLetter.id;
  wrongLetterDiv.textContent = letterObj.form;
  wrongLetterDiv.classList = 'box-sm green mb-1';
  wrongLetterDiv.appendChild(wrongLetterPosition);
  correctLetterDiv.appendChild(correctLetterSound);
  errorContainer.appendChild(chosenLetterDiv);
  errorContainer.appendChild(wrongLetterDiv);
  errorContainer.appendChild(correctLetterDiv);

  return errorContainer;
}

// function clearInfoModal() {}
function showInfoModal(e) {
  gameOverDiv.style.display = 'flex';
  closeModalEl.style.display = 'none';
  infoModalDiv.style.display = 'flex';
  erroInfoPara.innerHTML = '';
  erroInfoPara.innerHTML = `<span class="specialLetter">( ${e.target.textContent} )</span> has no START or MIDDLE form. The start form is the main letter <span class="specialLetter">( ${e.target.textContent} )</span>`;
}

function displayWrongModal(e) {
  let chosenLetterObj;
  lettersObjectArray.forEach((letter) => {
    if (letter.groupId == e.target.id && letter.position === position) {
      chosenLetterObj = letter;
    }
  });

  if (typeof chosenLetterObj === 'undefined') {
    showInfoModal(e);
    return;
  } else {
    gameOverDiv.style.display = 'flex';
    infoModalDiv.style.display = 'none';
    closeModalEl.style.display = 'none';
    correctionModal.style.display = 'flex';

    choiceBoxModalEl.textContent = chosenLetterObj.parent;
    choiceBoxModalEl.classList = 'box-sm red';
    choicePositionModalEl.textContent = position;

    correctBoxModalEl.textContent = randomLetterObj.parent;
    correctBoxModalEl.classList = 'box-sm green';
    correctPositionModalEl.textContent = randomLetterObj.position;

    testBoxModalEl.textContent = randomLetterObj.form;
    testLetterModalSpanPos.textContent = randomLetterObj.position;
    testLetterModalSpanSound.textContent = randomLetterObj.sound;
  }
}

function closeWrongModal() {
  gameOverDiv.style.display = 'none';
  infoModalDiv.style.display = 'none';
  gameOverModal.style.display = 'none';
  correctionModal.style.display = 'none';
  console.log('OK btn....');
  clearWrongModalValues();
}

function clearWrongModalValues() {
  choiceBoxModalEl.textContent = '';
  choicePositionModalEl.textContent = '';

  correctBoxModalEl.textContent = '';
  correctPositionModalEl.textContent = '';

  testBoxModalEl.textContent = '';
  testLetterModalSpanPos.textContent = '';
  testLetterModalSpanSound.textContent = '';
}

function createElement(element) {
  const newElement = document.createElement(element);
  return newElement;
}

function restartGame() {
  gameState = true;
  correct = [];
  wrong = [];
  gameOverDiv.style.display = 'none';
  gameOverModal.style.display = 'none';
  resultsGridDiv.innerHTML = '';
  unCheckRadioBtns();
  checkGameState();
  showScore();
  resetTimer();
  startTimer();
  errorTitleEl.style.display = 'none';
}

function flashLetter(letter, color) {
  letter.classList.add(color);
  setTimeout(function () {
    letter.classList.remove(color);
  }, 600);
}

function checkAnswer(e) {
  if (!positionCheck()) {
    alert('select a position');
    return;
  }

  if (
    gameState &&
    randomLetter.groupId === Number(e.target.id) &&
    randomLetter.position === position
  ) {
    correct.push(randomLetter);
    flashLetter(e.target, 'green');
  } else {
    wrong.push(randomLetter);
    flashLetter(e.target, 'red');
    displayWrongModal(e);
    displayWrong(e);
  }
  showScore();
  checkGameState();
}

function unCheckRadioBtns() {
  const checkedRadioBtn = document.querySelectorAll(
    'input[type="radio"]:checked'
  );

  checkedRadioBtn.forEach((radioBtn) => {
    radioBtn.checked = false;
  });
}

function positionCheck() {
  const checkedRadioBtn = document.querySelectorAll(
    'input[type="radio"]:checked'
  );
  if (checkedRadioBtn.length === 0) {
    return false;
  }

  if (checkedRadioBtn.length !== 0) {
    position = checkedRadioBtn[0].value;
    return true;
  }
}

function checkGameState() {
  unCheckRadioBtns();
  showScore();

  if (correct.length === lettersObjectArray.length) {
    endGame();
  }

  if (gameState) {
    startGame();
  } else {
    displayScore(correct.length, wrong.length);
    endGame();
  }
}

function endGame() {
  gameState = false;
  gameOverDiv.style.display = 'flex';
  closeModalEl.style.display = 'flex';
  gameOverModal.style.display = 'block';
  timeTakenSpan.style.color = 'var(--orange)';
  timeTakenSpan.style.fontSize = '1.1rem';
  timeTakenSpan.textContent = `Time: ${minutes}m : ${seconds}s`;
  stopTimer();
}

function startGame() {
  randomLetter = generateRandomLetter();
  displayTestLetter(randomLetter);
  startTimer();
}

function displayTestLetter(letter) {
  testLetterDiv.innerHTML = letter.form;
  testLetterDiv.id = letter.groupId;
}

function generateRandomLetter() {
  randomNumber = randomNumberGenerator();
  randomLetterObj = generateRandomLetterObj(randomNumber);

  while (correct.includes(randomLetterObj)) {
    randomNumber = randomNumberGenerator();
    randomLetterObj = generateRandomLetterObj(randomNumber);
  }

  return randomLetterObj;
}

function randomNumberGenerator() {
  return Math.floor(Math.random() * lettersObjectArray.length) + 1;
}

function generateRandomLetterObj(id) {
  let randomLetterObj;
  lettersObjectArray.forEach((letterObj) => {
    if (letterObj.id === id) {
      randomLetterObj = letterObj;
    }
  });

  return randomLetterObj;
}
