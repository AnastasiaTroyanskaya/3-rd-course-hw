const { it, expect } = require("@jest/globals");
const { getCardsArray } = require("./components/utils");

import { uniq } from "lodash";

describe("getCardsArray", () => {
  it("should return an array of cards with length equal to half of the difficulty level", () => {
    const cardsArray = getCardsArray(4);
    expect(cardsArray.length).toEqual(4);
  });

  it("should return an array with duplicated cards", () => {
    const cardsArray = getCardsArray(10);
    const uniqueCards = uniq(cardsArray);
    expect(uniqueCards.length).toEqual(cardsArray.length / 2);
  });

  it("should return a shuffled array of cards", () => {
    const cardsArray1 = getCardsArray(6);
    const cardsArray2 = getCardsArray(6);
    expect(cardsArray1).not.toEqual(cardsArray2);
  });
});
