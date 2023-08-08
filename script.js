let minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
minValue = Math.max(-999, Math.min(999, minValue));

let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
maxValue = Math.max(-999, Math.min(999, maxValue));

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
function numberToWords(number) {
  const words = {
    0: "ноль", 1: "один", 2: "два", 3: "три", 4: "четыре", 5: "пять",
    6: "шесть", 7: "семь", 8: "восемь", 9: "девять", 10: "десять",
    11: "одиннадцать", 12: "двенадцать", 13: "тринадцать", 14: "четырнадцать",
    15: "пятнадцать", 16: "шестнадцать", 17: "семнадцать", 18: "восемнадцать",
    19: "девятнадцать",
    20: "двадцать", 30: "тридцать", 40: "сорок", 50: "пятьдесят",
    60: "шестьдесят", 70: "семьдесят", 80: "восемьдесят", 90: "девяносто"
  };

  if (number <= 20) {
    return words[number];
  }
  

  if (number < 100) {
    const tensDigit = Math.floor(number / 10) * 10;
    const onesDigit = number % 10;
    
    if (onesDigit === 0) {
      return words[tensDigit];
    }
    
    return `${words[tensDigit]} ${words[onesDigit]}`;
  }
  

  if (number < 100) {
    const tensDigit = Math.floor(number / 10) * 10;
    const onesDigit = number % 10;
    return `${words[tensDigit]} ${words[onesDigit]}`;
  }

  const hundredsDigit = Math.floor(number / 100);
  const remainder = number % 100;

  if (remainder === 0) {
    return `${words[hundredsDigit]}сот`;
  }

  if (remainder <= 20) {
    return `${words[hundredsDigit]}сот ${words[remainder]}`;
  }

  const tensDigit = Math.floor(remainder / 10) * 10;
  const onesDigit = remainder % 10;
  return `${words[hundredsDigit]}сот ${words[tensDigit]} ${words[onesDigit]}`;
}

let answerNumber = (Math.floor((minValue + maxValue) / 2));
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
let answerText = answerNumber.toString();
if (answerText.length <= 20) {
  answerField.innerText = `Вы загадали число ${numberToWords(answerNumber)}?`;
} else {
  answerField.innerText = `Вы загадали число ${answerNumber}?`;
}

document.getElementById('btnRetry').addEventListener('click', function () {
  minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
   minValue = Math.max(-999, Math.min(999, minValue));
  maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
   maxValue = Math.max(-999, Math.min(999, maxValue));
  answerNumber = Math.floor((minValue + maxValue) / 2);
  orderNumber = 1;
  gameRun = true;

  orderNumberField.innerText = orderNumber;
  let answerText = answerNumber.toString();
  if (answerText.length <= 20) {
      answerField.innerText = `Вы загадали число ${numberToWords(answerNumber)}?`;
  } else {
      answerField.innerText = `Вы загадали число ${answerNumber}?`;
  }
});

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
      if (minValue === maxValue) {
        const phraseRandom = Math.round(Math.random());
        const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            `Я сдаюсь..\n\u{1F92F}`;
  
        answerField.innerText = answerPhrase;
        gameRun = false;
      } else {
        const phrases = [
          `Вы загадали число больше, чем ${answerNumber}?`,
          `Похоже, что ваше число больше ${answerNumber}?`,
          `Наверное, ваше число больше, чем ${answerNumber}?`
        ];
        const randomIndex = Math.floor(Math.random() * phrases.length);
        answerField.innerText = phrases[randomIndex];
        minValue = answerNumber + 1;
        answerNumber = Math.floor((minValue + maxValue) / 2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        let answerText = answerNumber.toString();
if (answerText.length <= 20) {
  answerField.innerText = `Вы загадали число ${numberToWords(answerNumber)}?`;
} else {
  answerField.innerText = `Вы загадали число ${answerNumber}?`;
}
      }
    }
  })
  

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
          const phrases = [
            `Вы загадали число меньше, чем ${answerNumber}?`,
            `Похоже, что ваше число меньше ${answerNumber}?`,
            `Наверное, ваше число меньше, чем ${answerNumber}?`
          ];
          const randomIndex = Math.floor(Math.random() * phrases.length);
          answerField.innerText = phrases[randomIndex];
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let answerText = answerNumber.toString();
if (answerText.length <= 20) {
  answerField.innerText = `Вы загадали число ${numberToWords(answerNumber)}?`;
} else {
  answerField.innerText = `Вы загадали число ${answerNumber}?`;
}
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phrases = [
            `Я всегда угадываю!\n\u{1F60E}`,
            `Победа за мной!\n\u{1F389}`,
            `Моя победа!\n\u{1F44F}`
          ];
          const randomIndex = Math.floor(Math.random() * phrases.length);
          answerField.innerText = phrases[randomIndex];
          gameRun = false;
    }
})


document.getElementById('btnRestart').addEventListener('click', function () {
         minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
         maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
          answerNumber = Math.floor((minValue + maxValue) / 2);
          orderNumber = 1;
          gameRun = true;

          orderNumberField.innerText = orderNumber;
          let answerText = answerNumber.toString();
if (answerText.length <= 20) {
  answerField.innerText = `Вы загадали число ${numberToWords(answerNumber)}?`;
} else {
  answerField.innerText = `Вы загадали число ${answerNumber}?`;
}
})