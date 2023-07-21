import { getLocations } from "./database.js";

export const Locationzz = () => {
  const place = getLocations();

  let htmlString = `<article class="locations">`;

  for (const placez of place) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="locator">
                
                <div><img class="locationImage" src="${placez.image}" /></div>
                <div class="location__name">Location Name: ${placez.name}</div>
            </section>
    `;
  }
  htmlString += "</article>";

  return htmlString;
};
