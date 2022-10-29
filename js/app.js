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
    form: 'ـﺎ',
    position: 'end',
    sound: 'alif',
    special: true,
  },
  {
    id: 2,
    groupId: 2,
    parent: 'ﺏ',
    form: 'ﺑـ',
    position: 'start',
    sound: 'baa',
    special: false,
  },
  {
    id: 3,
    groupId: 2,
    parent: 'ﺏ',
    form: 'ـﺒـ',
    position: 'mid',
    sound: 'baa',
    special: false,
  },
  {
    id: 4,
    groupId: 2,
    parent: 'ﺏ',
    form: 'ـﺐ',
    position: 'end',
    sound: 'baa',
    special: false,
  },

  {
    id: 5,
    groupId: 3,
    parent: 'ﺕ',
    form: 'ﺗـ',
    position: 'start',
    sound: 'ta',
    special: false,
  },

  {
    id: 6,
    groupId: 3,
    parent: 'ﺕ',
    form: 'ـﺘـ',
    position: 'mid',
    sound: 'ta',
    special: false,
  },

  {
    id: 7,
    groupId: 3,
    parent: 'ﺕ',
    form: 'ـﺖ',
    position: 'end',
    sound: 'ta',
    special: false,
  },

  {
    id: 8,
    groupId: 4,
    parent: 'ﺙ',
    form: 'ﺛـ',
    position: 'start',
    sound: 'tha',
    special: false,
  },
  {
    id: 9,
    groupId: 4,
    parent: 'ﺙ',
    form: 'ـﺜـ',
    position: 'mid',
    sound: 'tha',
    special: false,
  },
  {
    id: 10,
    groupId: 4,
    parent: 'ﺙ',
    form: 'ـﺚ',
    position: 'end',
    sound: 'tha',
    special: false,
  },
  {
    id: 11,
    groupId: 5,
    parent: 'ﺝ',
    form: 'ﺟـ',
    position: 'start',
    sound: 'jiim',
    special: false,
  },
  {
    id: 12,
    groupId: 5,
    parent: 'ﺝ',
    form: 'ـﺠـ',
    position: 'mid',
    sound: 'jiim',
    special: false,
  },
  {
    id: 13,
    groupId: 5,
    parent: 'ﺝ',
    form: 'ـﺞ',
    position: 'end',
    sound: 'jiim',
    special: false,
  },
  {
    id: 14,
    groupId: 6,
    parent: 'ﺡ',
    form: 'ﺣـ',
    position: 'start',
    sound: 'Ha',
    special: false,
  },

  {
    id: 15,
    groupId: 6,
    parent: 'ﺡ',
    form: 'ـﺤـ',
    position: 'mid',
    sound: 'Ha',
    special: false,
  },

  {
    id: 16,
    groupId: 6,
    parent: 'ﺡ',
    form: 'ـﺢ',
    position: 'end',
    sound: 'Ha',
    special: false,
  },

  {
    id: 17,
    groupId: 7,
    parent: 'ﺥ',
    form: 'ﺧـ',
    position: 'start',
    sound: 'kha',
    special: false,
  },
  {
    id: 18,
    groupId: 7,
    parent: 'ﺥ',
    form: 'ـﺨـ',
    position: 'mid',
    sound: 'kha',
    special: false,
  },
  {
    id: 19,
    groupId: 7,
    parent: 'ﺥ',
    form: 'ـﺦ',
    position: 'end',
    sound: 'kha',
    special: false,
  },
  /*
  {
    id: 20,
    groupId: 8,
    parent: 'ﺩ',
    form: 'ـﺪ',
    position: 'end',
    sound: 'dal',
    special: true,
  },
  {
    id: 21,
    groupId: 9,
    parent: 'ﺫ',
    form: 'ـﺬ',
    position: 'end',
    sound: 'dthal',
    special: true,
  },
  {
    id: 22,
    groupId: 10,
    parent: 'ﺭ',
    form: 'ـﺮ',
    position: 'end',
    sound: 'ra',
    special: true,
  },

  {
    id: 23,
    groupId: 11,
    parent: 'ﺯ',
    form: 'ـﺰ',
    position: 'end',
    sound: 'za',
    special: true,
  },

  {
    id: 24,
    groupId: 12,
    parent: 'ﺱ',
    form: 'ﺳـ',
    position: 'start',
    sound: 'siin',
    special: false,
  },
  {
    id: 25,
    groupId: 12,
    parent: 'ﺱ',
    form: 'ـﺴـ',
    position: 'mid',
    sound: 'siin',
    special: false,
  },
  {
    id: 26,
    groupId: 12,
    parent: 'ﺱ',
    form: 'ـﺲ',
    position: 'end',
    sound: 'siin',
    special: false,
  },
  {
    id: 27,
    groupId: 13,
    parent: 'ﺵ',
    form: 'ﺷـ',
    position: 'start',
    sound: 'shiin',
    special: false,
  },
  {
    id: 28,
    groupId: 13,
    parent: 'ﺵ',
    form: 'ـﺸـ',
    position: 'mid',
    sound: 'shiin',
    special: false,
  },
  {
    id: 29,
    groupId: 13,
    parent: 'ﺵ',
    form: 'ـﺶ',
    position: 'end',
    sound: 'shiin',
    special: false,
  },
  {
    id: 30,
    groupId: 14,
    parent: 'ﺹ',
    form: 'ﺻـ',
    position: 'start',
    sound: 'saad',
    special: false,
  },
  {
    id: 31,
    groupId: 14,
    parent: 'ﺹ',
    form: 'ـﺼـ',
    position: 'mid',
    sound: 'saad',
    special: false,
  },
  {
    id: 32,
    groupId: 14,
    parent: 'ﺹ',
    form: 'ـﺺ',
    position: 'end',
    sound: 'saad',
    special: false,
  },
  {
    id: 33,
    groupId: 15,
    parent: 'ﺽ',
    form: 'ﺿـ',
    position: 'start',
    sound: 'dhaad',
    special: false,
  },
  {
    id: 34,
    groupId: 15,
    parent: 'ﺽ',
    form: 'ـﻀـ',
    position: 'mid',
    sound: 'dhaad',
    special: false,
  },
  {
    id: 35,
    groupId: 15,
    parent: 'ﺽ',
    form: 'ـﺾ',
    position: 'end',
    sound: 'dhaad',
    special: false,
  },
  {
    id: 36,
    groupId: 16,
    parent: 'ﻁ',
    form: 'ﻃـ',
    position: 'start',
    sound: 'tda',
    special: false,
  },
  {
    id: 37,
    groupId: 16,
    parent: 'ﻁ',
    form: 'ـﻄـ',
    position: 'mid',
    sound: 'tda',
    special: false,
  },
  {
    id: 38,
    groupId: 16,
    parent: 'ﻁ',
    form: 'ـﻂ',
    position: 'end',
    sound: 'tda',
    special: false,
  },
  {
    id: 39,
    groupId: 17,
    parent: 'ﻅ',
    form: 'ﻇـ',
    position: 'start',
    sound: 'dha',
    special: false,
  },
  {
    id: 40,
    groupId: 17,
    parent: 'ﻅ',
    form: 'ـﻈـ',
    position: 'mid',
    sound: 'dha',
    special: false,
  },
  {
    id: 41,
    groupId: 17,
    parent: 'ﻅ',
    form: 'ـﻆ',
    position: 'end',
    sound: 'dha',
    special: false,
  },
  {
    id: 42,
    groupId: 18,
    parent: 'ﻉ',
    form: 'ﻋـ',
    position: 'start',
    sound: 'ayn',
    special: false,
  },
  {
    id: 43,
    groupId: 18,
    parent: 'ﻉ',
    form: 'ـﻌـ',
    position: 'mid',
    sound: 'ayn',
    special: false,
  },
  {
    id: 44,
    groupId: 18,
    parent: 'ﻉ',
    form: 'ـﻊ',
    position: 'end',
    sound: 'ayn',
    special: false,
  },
  {
    id: 45,
    groupId: 19,
    parent: 'ﻍ',
    form: 'ﻏـ',
    position: 'start',
    sound: 'ghayn',
    special: false,
  },
  {
    id: 46,
    groupId: 19,
    parent: 'ﻍ',
    form: 'ـﻐـ',
    position: 'mid',
    sound: 'ghayn',
    special: false,
  },
  {
    id: 47,
    groupId: 19,
    parent: 'ﻍ',
    form: 'ـﻎ',
    position: 'end',
    sound: 'ghayn',
    special: false,
  },
  {
    id: 48,
    groupId: 20,
    parent: 'ﻑ',
    form: 'ﻓـ',
    position: 'start',
    sound: 'fa',
    special: false,
  },

  {
    id: 49,
    groupId: 20,
    parent: 'ﻑ',
    form: 'ـﻔـ',
    position: 'mid',
    sound: 'fa',
    special: false,
  },

  {
    id: 50,
    groupId: 20,
    parent: 'ﻑ',
    form: 'ـﻒ',
    position: 'end',
    sound: 'fa',
    special: false,
  },

  {
    id: 51,
    groupId: 21,
    parent: 'ﻕ',
    form: 'ﻗـ',
    position: 'start',
    sound: 'qaaf',
    special: false,
  },
  {
    id: 52,
    groupId: 21,
    parent: 'ﻕ',
    form: 'ـﻘـ',
    position: 'mid',
    sound: 'qaaf',
    special: false,
  },
  {
    id: 53,
    groupId: 21,
    parent: 'ﻕ',
    form: 'ـﻖ',
    position: 'end',
    sound: 'qaaf',
    special: false,
  },
  {
    id: 54,
    groupId: 22,
    parent: 'ﻙ',
    form: 'ﻛـ',
    position: 'start',
    sound: 'kaaf',
    special: false,
  },
  {
    id: 55,
    groupId: 22,
    parent: 'ﻙ',
    form: 'ـﻜـ',
    position: 'mid',
    sound: 'kaaf',
    special: false,
  },
  {
    id: 56,
    groupId: 22,
    parent: 'ﻙ',
    form: 'ـﻚ',
    position: 'end',
    sound: 'kaaf',
    special: false,
  },
  {
    id: 57,
    groupId: 23,
    parent: 'ﻝ',
    form: 'ﻟـ',
    position: 'start',
    sound: 'laam',
    special: false,
  },
  {
    id: 58,
    groupId: 23,
    parent: 'ﻝ',
    form: 'ـﻠـ',
    position: 'mid',
    sound: 'laam',
    special: false,
  },
  {
    id: 59,
    groupId: 23,
    parent: 'ﻝ',
    form: 'ـﻞ',
    position: 'end',
    sound: 'laam',
    special: false,
  },
  {
    id: 60,
    groupId: 24,
    parent: 'ﻡ',
    form: 'ﻣـ',
    position: 'start',
    sound: 'miim',
    special: false,
  },
  {
    id: 61,
    groupId: 24,
    parent: 'ﻡ',
    form: 'ـﻤـ',
    position: 'mid',
    sound: 'miim',
    special: false,
  },
  {
    id: 62,
    groupId: 24,
    parent: 'ﻡ',
    form: 'ـﻢ',
    position: 'end',
    sound: 'miim',
    special: false,
  },
  {
    id: 63,
    groupId: 25,
    parent: 'ﻥ',
    form: 'ﻧـ',
    position: 'start',
    sound: 'noon',
    special: false,
  },
  {
    id: 64,
    groupId: 25,
    parent: 'ﻥ',
    form: 'ـﻨـ',
    position: 'mid',
    sound: 'noon',
    special: false,
  },
  {
    id: 65,
    groupId: 25,
    parent: 'ﻥ',
    form: 'ـﻦ',
    position: 'end',
    sound: 'noon',
    special: false,
  },
  {
    id: 66,
    groupId: 26,
    parent: 'ﻩ',
    form: 'ﻫـ',
    position: 'start',
    sound: 'ha',
    special: false,
  },

  {
    id: 67,
    groupId: 26,
    parent: 'ﻩ',
    form: 'ـﻬـ',
    position: 'mid',
    sound: 'ha',
    special: false,
  },

  {
    id: 68,
    groupId: 26,
    parent: 'ﻩ',
    form: 'ـﻪ',
    position: 'end',
    sound: 'ha',
    special: false,
  },

  {
    id: 69,
    groupId: 27,
    parent: 'ﻭ',
    form: 'ـﻮ',
    position: 'end',
    sound: 'waaw',
    special: true,
  },
  {
    id: 70,
    groupId: 28,
    parent: 'ﻱ',
    form: 'ﻳـ',
    position: 'start',
    sound: 'ya',
    special: false,
  },

  {
    id: 71,
    groupId: 28,
    parent: 'ﻱ',
    form: 'ـﻴـ',
    position: 'mid',
    sound: 'ya',
    special: false,
  },

  {
    id: 72,
    groupId: 28,
    parent: 'ﻱ',
    form: 'ـﻲ',
    position: 'end',
    sound: 'ya',
    special: false,
  },
*/
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
  const containerDiv = createElement('div');

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
  const letterDiv = createElement('div');
  letterDiv.id = correctLetter.id;
  letterDiv.textContent = correctLetter.form;
  letterDiv.classList = 'box-sm green';
  resultsGridDiv.appendChild(letterDiv);
}

function displayWrong() {
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
    wrongLetterDiv = createWrongLetterDiv(wrongLetter);
    resultsGridDiv.appendChild(wrongLetterDiv);
  }

  if (count > 1) {
    const existingWrongLetters = resultsGridDiv.children;
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
  const errorContainer = createElement('div');
  const correctLetterDiv = createElement('div');
  const wrongLetterPosition = createElement('span');
  const correctLetterSound = createElement('span');
  const wrongLetterDiv = createElement('div');
  wrongLetterPosition.textContent = letterObj.position;
  correctLetterSound.textContent = letterObj.sound;
  correctLetterDiv.textContent = letterObj.parent;
  errorContainer.classList = 'error';
  correctLetterDiv.classList = 'box-sm green';
  wrongLetterDiv.id = randomLetter.id;
  wrongLetterDiv.textContent = letterObj.form;
  wrongLetterDiv.classList = 'box-sm red mb-1';
  wrongLetterDiv.appendChild(wrongLetterPosition);
  correctLetterDiv.appendChild(correctLetterSound);
  errorContainer.appendChild(wrongLetterDiv);
  errorContainer.appendChild(correctLetterDiv);
  return errorContainer;
}
function createElement(element) {
  const newElement = document.createElement(element);
  return newElement;
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
    // displayCorrect();
  } else {
    wrong.push(randomLetter);
    flashLetter(e.target, 'red');
    displayWrong();
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
}

function startGame() {
  randomLetter = generateRandomLetter();
  displayTestLetter(randomLetter);
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
