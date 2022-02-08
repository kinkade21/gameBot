'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const randomNumber = function (n) {
  return Math.floor(Math.random() * Math.floor(n));
};

const start = function () {
  let targetNumber = randomNumber(100);
  let attempts = 10;
  const game = function () {
    attempts--;
    if (attempts < 0) {
      if (confirm("Вы не угадали :( Загаданное число: "+targetNumber+" . Сыграем ещё раз?")) {
        start();
      } else {
        alert("Спасибо за внимание!");
        return;
      }
    } else {
      const num = prompt("Угадай число от 1 до 100");
      if (num === null) {
        alert("Спасибо за внимание!");
        return;
      }
      if (isNumber(num)) {
        let messageNumber = +num;
        if (messageNumber > targetNumber) {
          alert("Загаданное число меньше, осталось "+attempts+" попыток.");
          game();
        } else if (messageNumber < targetNumber) {
          alert("Загаданное число больше, осталось "+attempts+" попыток.");
          game();
        } else {
          if (confirm("Поздравляю, Вы угадали!!! Желаете сыграть  еще?")) {
            start();
          } else {
            alert("Конец игры!");
            return;
          }
        }
      } else {
        alert("Введите число");
        game();
      }
    }
  };
  game();
};
start();