import { getTips } from "./database.js";

export const tipList = () => {
  const tank = getTips();

  let htmlString = `<aside class="tankz">`;

  for (const tanks of tank) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="tanks">
              
              <div><img class="tankIMAGE" src="${tanks.image}" /></div>
              <div class="fish__name">How to clean: ${tanks.cleaner}</div>
              <div class="fish__species">Temp: ${tanks.watertemp}</div>
              <div class="fish__length">Thoughts: ${tanks.thoughts}</div>
          </section>
  `;
  }
  htmlString += "</aside>";

  return htmlString;
};
