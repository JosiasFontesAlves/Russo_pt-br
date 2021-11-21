import { Card, sElem } from "./lib7.js";

/**
 * @param { { tag: {props: string} } } card
 * @param {HTMLElement[]} childs
 */
export default (card, childs) => sElem('main').appendChild(Card(card, childs));