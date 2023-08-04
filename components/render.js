import { getCardsArray } from "../components/utils.js";
import { gameLogic } from "../index.js";
import { initTimer } from "../components/utils.js";
let appEl = document.getElementById("app");

export const renderApp = (appEl) => {
  const appHtml = `
    <form action="#" class="difficulty-block">
    <h3 class="difficulty-title">Выбери сложность</h3>
    <fieldset class="radio-inputs">
        <label>
            <input type="radio" name="difficulty" value="6"><span class="level-button">1</span>
        </label>
        <label>
            <input type="radio" name="difficulty" value="12"><span class="level-button">2</span>
        </label>
        <label>
            <input type="radio" name="difficulty" value="18"><span class="level-button">3</span>
        </label>
    </fieldset>
    <button class="start-button">Старт</button>
  </form>`;

  appEl.innerHTML = appHtml;

  appEl.querySelector(".start-button").addEventListener("click", () => {
    const levels = appEl.querySelectorAll('input[name="difficulty"]');
    for (const level of levels) {
      if (level.checked) {
        console.log(level.value);
        const gameLevel = level.value;
        renderGameComponent(gameLevel);
      }
    }
  });
};
function getCardHTML(card) {
  return `<li class="shirt">
      <div class="card">
          <img src="${card.value}" alt = "карта">
      </div>
      `;
}
function renderGameComponent(level) {
  const cards = getCardsArray(level);
  const cardsHtml = cards.map((card) => getCardHTML(card)).join("");
  const appHtml = `
      <div class="game-header">
      <div class="timer">
      <div class="timer-title">
      <p class="time-labels">min</p>
      <p class="time-labels">sek</p>
      </div>
      <p class="time">00.00</p>
      </div>
      <button class="restart">Начать заново</button>
      </div>
      <div class="play-field level-${level}">
      <ul>${cardsHtml}</ul>
      </div>`;
  appEl.innerHTML = appHtml;
  const timer = appEl.querySelector(".time");
  if (timer) initTimer(timer);

  const restart = appEl.querySelector(".restart");
  if (restart) {
    restart.onclick = () => {
      renderApp(appEl);
    };
    gameLogic(cards);
  }
  // let playingCards = appEl.querySelectorAll(".card");
  // for (const playingCard of playingCards) {
  //   setTimeout(() => playingCard.classList.add("hide"), 5000);
  // }
}
export function renderCongratulation(appEl, time, win) {
  const winHtml = `<div class="finish-game">
    <div class="image">
    <img src=${
      win ? "./assets/images/celebration.png" : "./assets/images/dead.png"
    } alt = "картинка">
    </div>
    <h3 class="win-title">Вы ${win ? "выиграли" : "проиграли"}!</h3>
    <!-- <div class="time"> -->
    <p class="time-text">Затраченное время:</p>
    <p class="time-value">${time}</p>
    <!-- </div> -->
    <button class="start-button">Играть снова</button>
  </div>`;
  appEl.innerHTML = winHtml;
  const restart = appEl.querySelector(".start-button");
  if (restart)
    restart.onclick = () => {
      renderApp(appEl);
    };
}
