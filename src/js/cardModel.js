// transform the raw card json
import rawCardData from "../data/cards.json";

const cardData = rawCardData.map((card) => {
  // do any data manipulation here
  return card;
});

export default cardData;
