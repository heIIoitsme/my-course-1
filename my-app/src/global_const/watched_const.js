import {cardList, setCardList, WatchedStatus} from "./card_const";

function toggleWatchedStatus(id, cards, setCardsState) {
    const card = cards.find((item) => item.id === id);
    card.watched = WatchedStatus.Watched === card.watched ? WatchedStatus.Unwatched : WatchedStatus.Watched
    setCardsState([...cards])
    }
export { toggleWatchedStatus };