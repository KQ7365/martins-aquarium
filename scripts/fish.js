import { getFish } from "./database.js";

const mostHolyFish = () => {
  let holyFish = [];
  const dataz = getFish();

  for (const fish of dataz) {
    if (fish.Length % 3 === 0) {
      holyFish.push(fish);
    }
  }
  return holyFish;
};
const soldierFish = () => {
  let soldiers = [];
  const dataz = getFish();

  for (const fish of dataz) {
    if (fish.Length % 5 === 0) {
      soldiers.push(fish);
    }
  }
  return soldiers;
};
const nonHolyFish = () => {
  let regularFish = [];
  const dataz = getFish();

  for (const fish of dataz) {
    if (fish.Length % 3 != 0 && fish.Length % 5 != 0) {
      regularFish.push(fish);
    }
  }
  return regularFish;
};

const holy = mostHolyFish();
const soldier = soldierFish();
const devilFish = nonHolyFish();

const lengthOrder = [...holy, ...soldier, ...devilFish];

export const FishList = () => {
  const fishes = lengthOrder;

  let htmlString = `<article class="fishList">`;

  for (const fish of fishes) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="fishy">
            
            <div><img  class="fishIMAGE" src="${fish.image}" /></div>
            <div class="fish__name">Species: ${fish.Species}</div>
            <div class="fish__species">Length: ${fish.Length}</div>
            <div class="fish__length">Nickname: ${fish.Nickname}</div>
            <div class="fish__location">Harvest Location: ${fish.Harvest}</div>
            <div class="fish__diet">Diet: ${fish.Diet}</div>
        </section>
`;
  }
  htmlString += "</article>";

  return htmlString;
};
