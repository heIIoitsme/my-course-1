import {cardList} from "./card_const";

export const filterByString = (queryString) =>
    cardList.filter((item) => item.ru_name.toLowerCase().includes(queryString.toLowerCase()));