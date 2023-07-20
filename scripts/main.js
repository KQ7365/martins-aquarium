import { FishList } from "./fish.js";
import { tipList } from "./tips.js";

const parentHTMLElement = document.querySelector("#container");
const secondHTMLElement = document.querySelector("#ontheright");

parentHTMLElement.innerHTML = FishList();

secondHTMLElement.innerHTML = tipList();
