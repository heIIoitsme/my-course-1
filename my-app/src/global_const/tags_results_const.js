import { cardList } from "./card_const";

const filterByString = (queryString) => {
    queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tagsFromUrl = urlParams.getAll('t');
    console.log(tagsFromUrl);
    return cardList.filter(({ tags: arr }) => arr.some(tag => tagsFromUrl.includes(tag)));
};

const tagsFromUrl = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tagsFromUrl = urlParams.getAll('t');
    return tagsFromUrl.join(', ');
};

export { filterByString, tagsFromUrl };