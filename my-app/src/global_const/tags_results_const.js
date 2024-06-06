import {cardList} from "./card_const";

export const filterByString = (queryString) => {
    queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tagsFromUrl = urlParams.getAll('t');
    console.log(tagsFromUrl);
    return cardList.filter( ({tags: arr}) => arr.some(tag => tagsFromUrl.includes(tag)));
}
