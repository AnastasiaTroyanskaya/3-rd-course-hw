let appEl = document.getElementById("app");
import { getCardsArray } from "../components/utils.js";
export const renderApp = () => {
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
          <img src="${card}" alt = "карта">
      </div>
      `;
}
function renderGameComponent(level) {
  const cards = getCardsArray(level);
  const cardsHtml = cards.map((card) => getCardHTML(card)).join("");
  console.log(cardsHtml);
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

  let playingCards = appEl.querySelectorAll(".card");
  for (const playingCard of playingCards) {
    setTimeout(() => playingCard.classList.add("hide"), 5000);
  }
}
