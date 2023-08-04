import { shuffle } from "lodash";
import { concat } from "lodash";

export const getCardsArray = (difficult) => {
  const cards = [
    { id: 61, value: "./assets/images/cards/6 бубны.png" },
    { id: 62, value: "./assets/images/cards/6 крести.png" },
    { id: 63, value: "./assets/images/cards/6 пики.png" },
    { id: 64, value: "./assets/images/cards/6 черви.png" },
    { id: 71, value: "./assets/images/cards/7 бубны.png" },
    { id: 72, value: "./assets/images/cards/7 крести.png" },
    { id: 73, value: "./assets/images/cards/7 пики.png" },
    { id: 74, value: "./assets/images/cards/7 черви.png" },
    { id: 81, value: "./assets/images/cards/8 бубны.png" },
    { id: 82, value: "./assets/images/cards/8 крести.png" },
    { id: 83, value: "./assets/images/cards/8 пики.png" },
    { id: 84, value: "./assets/images/cards/8 черви.png" },
    { id: 91, value: "./assets/images/cards/9 бубны.png" },
    { id: 92, value: "./assets/images/cards/9 крести.png" },
    { id: 93, value: "./assets/images/cards/9 пики.png" },
    { id: 94, value: "./assets/images/cards/9 черви.png" },
    { id: 101, value: "./assets/images/cards/10 бубны.png" },
    { id: 102, value: "./assets/images/cards/10 крести.png" },
    { id: 103, value: "./assets/images/cards/10 пики.png" },
    { id: 104, value: "./assets/images/cards/10 черви.png" },
    { id: 11, value: "./assets/images/cards/валет бубны.png" },
    { id: 12, value: "./assets/images/cards/валет крести.png" },
    { id: 13, value: "./assets/images/cards/валет пики.png" },
    { id: 14, value: "./assets/images/cards/валет черви.png" },
    { id: 21, value: "./assets/images/cards/дама бубны.png" },
    { id: 22, value: "./assets/images/cards/дама крести.png" },
    { id: 23, value: "./assets/images/cards/дама пики.png" },
    { id: 24, value: "./assets/images/cards/дама черви.png" },
    { id: 31, value: "./assets/images/cards/король бубны.png" },
    { id: 32, value: "./assets/images/cards/король крести.png" },
    { id: 33, value: "./assets/images/cards/король пики.png" },
    { id: 34, value: "./assets/images/cards/король черви.png" },
    { id: 41, value: "./assets/images/cards/туз бубны.png" },
    { id: 42, value: "./assets/images/cards/туз крести.png" },
    { id: 43, value: "./assets/images/cards/туз пики.png" },
    { id: 44, value: "./assets/images/cards/туз черви.png" },
  ];
  const shuffledCards = shuffle(cards);
  const slicedArray = shuffledCards.slice(0, difficult / 2);
  const duplicatedArray = concat(slicedArray, slicedArray);
  return shuffle(duplicatedArray);
};

export function initTimer(element) {
  // let hours = 0;
  let minutes = 0;
  let seconds = 0;
  setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      // hours++;
      minutes = 0;
    }
    element.innerText = `${minutes < 10 ? "0" + minutes : minutes}.${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }, 1000);
}
