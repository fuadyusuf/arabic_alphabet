const testLetterDiv = document.querySelector('.test-letter');
const errorTitleEl = document.querySelector('.error-title');
const resultsGridDiv = document.querySelector('.results-grid');
const closeModelEl = document.querySelector('.modal .fa-xmark');
const closeTestBtn = document.getElementById('closeApp');
const restartTestBtn = document.getElementById('restart');
const gameOverDiv = document.querySelector('.end-game');
const letters = document.querySelectorAll('.box-sm');
let gameState = true;
let randomNumber;
let randomLetter;
let randomLetterObj;
let position;
let correct = [];
let wrong = [];

// LetterObjectArray
const lettersObjectArray = [
  {
    id: 1,
    groupId: 1,
    parent: 'ﺍ',
    name: 'ـﺎ',
    position: 'middle',
    sound: 'alif',
  },
  {
    id: 2,
    groupId: 2,
    parent: 'ﺏ',
    name: 'ﺑـ',
    position: 'start',
    sound: 'baa',
  },
  {
    id: 3,
    groupId: 2,
    parent: 'ﺏ',
    name: 'ـﺒـ',
    position: 'middle',
    sound: 'baa',
  },
  {
    id: 4,
    groupId: 2,
    parent: 'ﺏ',
    name: 'ـﺐ',
    position: 'end',
    sound: 'baa',
  },
  {
    id: 5,
    groupId: 3,
    parent: 'ﺕ',
    name: 'ﺗـ',
    position: 'start',
    sound: 'ta',
  },
  {
    id: 6,
    groupId: 3,
    parent: 'ﺕ',
    name: 'ـﺘـ',
    position: 'middle',
    sound: 'ta',
  },
  {
    id: 7,
    groupId: 3,
    parent: 'ﺕ',
    name: 'ـﺖ',
    position: 'end',
    sound: 'ta',
  },
  {
    id: 8,
    groupId: 4,
    parent: 'ﺙ',
    name: 'ﺛـ',
    position: 'start',
    sound: 'tha',
  },
  {
    id: 9,
    groupId: 4,
    parent: 'ﺙ',
    name: 'ـﺜـ',
    position: 'middle',
    sound: 'tha',
  },
  {
    id: 10,
    groupId: 4,
    parent: 'ﺙ',
    name: 'ـﺚ',
    position: 'end',
    sound: 'tha',
  },
];

(() => {
  letters.forEach((letter) => {
    letter.addEventListener('click', checkAnswer);
  });
  restartTestBtn.addEventListener('click', restartGame);
  closeTestBtn.addEventListener('click', closeTest);
  closeModelEl.addEventListener('click', restartGame);
  window.addEventListener('load', checkGameState);
})();

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
  const containerDiv = document.createElement('div');

  topNum.textContent = num1;
  divider.textContent = '/';
  totalNum.textContent = total;

  containerDiv.appendChild(topNum);
  containerDiv.appendChild(divider);
  containerDiv.appendChild(totalNum);

  resultDiv.appendChild(containerDiv);
}

function displayCorrect() {
  const correctLetter = correct[correct.length - 1];
  const letterDiv = document.createElement('div');
  letterDiv.id = correctLetter.id;
  letterDiv.textContent = correctLetter.name;
  letterDiv.classList = 'box-sm green';
  resultsGridDiv.appendChild(letterDiv);
}

function displayWrong() {
  const wrongLetter = wrong[wrong.length - 1];
  const wrongLetterId = wrongLetter.id;
  let wrongLetterDiv;
  let count = 0;

  wrong.forEach((letter) => {
    if (letter === wrongLetter) {
      count += 1;
    }
  });

  console.log(count);

  if (count <= 1) {
    wrongLetterDiv = createWrongLetterDiv(wrongLetter);
    resultsGridDiv.appendChild(wrongLetterDiv);
  }

  if (count > 1) {
    console.log('count > 1....');
    const existingWrongLetters = resultsGridDiv.children;
    console.log(existingWrongLetters);
    console.log(wrongLetterId);
    for (let i = 0; i < existingWrongLetters.length; i++) {
      if (existingWrongLetters[i].id == wrongLetterId) {
        const countBubble = document.createElement('span');
        countBubble.classList = 'count';
        countBubble.textContent = count;
        existingWrongLetters[i].appendChild(countBubble);
      }
    }
  }
}

function createWrongLetterDiv(letterObj) {
  const wrongLetterDiv = document.createElement('div');
  wrongLetterDiv.id = letterObj.id;
  wrongLetterDiv.textContent = letterObj.name;
  wrongLetterDiv.classList = 'box-sm red';
  return wrongLetterDiv;
}

function restartGame() {
  gameState = true;
  correct = [];
  wrong = [];
  gameOverDiv.style.top = '150%';
  resultsGridDiv.innerHTML = '';
  unCheckRadioBtns();
  checkGameState();
  errorTitleEl.style.display = 'none';
}

function checkAnswer(e) {
  if (!positionCheck()) {
    alert('select a position');
    return;
  }

  errorTitleEl.style.display = 'block';

  if (
    gameState &&
    randomLetter.groupId === Number(e.target.id) &&
    randomLetter.position === position
  ) {
    correct.push(randomLetter);
    displayCorrect();
    console.log('correct', correct);
  } else {
    wrong.push(randomLetter);
    displayWrong();
    console.log('wrong', wrong);
  }
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
  gameOverDiv.style.top = 0;
  console.log('GAME OVER!');
}

function startGame() {
  randomLetter = generateRandomLetter();
  displayTestLetter(randomLetter);
}

function displayTestLetter(letter) {
  testLetterDiv.innerHTML = letter.name;
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
