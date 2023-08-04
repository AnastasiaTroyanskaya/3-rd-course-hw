import "./styles.css";
import { renderApp } from "./components/render.js";
import { renderCongratulation } from "./components/render.js";
// import { getCardsArray } from "./components/utils.js";

let appEl = document.getElementById("app");
let firstCard = null;
let secondCard = null;
let clickable = true;

if (appEl) renderApp(appEl);

export function gameLogic(cards) {
  if (appEl) {
    let cardsShirts = appEl.querySelectorAll(".shirt");
    cardsShirts.forEach((cardsShirt) => {
      setTimeout(
        () => cardsShirt.firstElementChild?.classList.add("hide"),
        5000,
      );
      setTimeout(() => cardsShirt.classList.add("flipped"), 5000);
    });

    setTimeout(() => {
      cardsShirts.forEach((cardsShirt, index) => {
        cardsShirt.addEventListener("click", () => {
          if (clickable === true && !cardsShirt.classList.contains("success")) {
            setTimeout(() => cardsShirt.classList.remove("flipped"), 200);
            setTimeout(
              () => cardsShirt.firstElementChild?.classList.remove("hide"),
              200,
            );

            if (firstCard === null) {
              firstCard = index;
            } else {
              if (index !== firstCard) {
                secondCard = index;
                clickable = false;
              }
            }
            if (
              firstCard !== null &&
              secondCard !== null &&
              firstCard !== secondCard
            ) {
              if (cards[firstCard] === cards[secondCard]) {
                cardsShirts[firstCard].classList.add("success");
                cardsShirts[secondCard].classList.add("success");
                firstCard = null;
                secondCard = null;
                clickable = true;
              } else {
                if (appEl) {
                  let time = appEl.querySelector(".time");
                  if (time) renderCongratulation(appEl, time.innerText);
                }
              }
              if (
                Array.from(cardsShirts).every((cardsShirt) =>
                  cardsShirt.classList.contains("success"),
                )
              ) {
                if (appEl) {
                  let time = appEl.querySelector(".time");
                  if (time) renderCongratulation(appEl, time.innerText, "win");
                }
              }
            }
          }
        });
      });
    }, 5000);
  }
}
