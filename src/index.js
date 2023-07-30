import cardData from "./js/cardModel.js";
import { renderUserView } from "./js/cardRenderer.js";

document.getElementById("cards-go-here").innerHTML = renderUserView(cardData);

// add flip animation to cards
const cards = document.getElementsByClassName("card-number");
Object.values(cards).forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.parentElement.classList.toggle("flipCard");
  });
});
