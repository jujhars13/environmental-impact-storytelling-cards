// transform the raw card json
// we want an array of elements that look like
// [{
//   categoryName: <name>
//   cards:[<card_data>,card_data>]
// },
// {
//   categoryName: <name>
//   cards:[<card_data>,card_data>]
// }]
import rawCardData from "../data/cards.json";

// get all categories first then add data to them
// we want the data objects by returned by category
// get unique categories to begin with
let categories = {};
rawCardData.forEach((el) => {
  categories[el.category] = {};
});
rawCardData.forEach((el) => {
  if (el.category) {
    categories[el.category].categoryName = el.category;
    categories[el.category].cards = [];
  }
});

const cardOnlyData = Object.values(categories);
console.log(cardOnlyData);

export default cardOnlyData;
