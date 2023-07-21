import { FishList } from "./fish.js";
import { tipList } from "./tips.js";
import { Locationzz } from "./locations.js";

const parentHTMLElement = document.querySelector("#container");
const secondHTMLElement = document.querySelector("#ontheright");
const thirdHTMLElement = document.querySelector("#ontheleft");

parentHTMLElement.innerHTML = FishList();

secondHTMLElement.innerHTML = tipList();

thirdHTMLElement.innerHTML = Locationzz();
