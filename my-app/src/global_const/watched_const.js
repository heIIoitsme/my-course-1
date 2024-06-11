import {WatchedStatus} from "./card_const";
import {userData} from "./userProfile";

function toggleWatchedStatus(id, cards, setCardsState) {
    const card = cards.find((item) => item.id === id);
    card.watched = WatchedStatus.Watched === card.watched ? WatchedStatus.Unwatched : WatchedStatus.Watched
    setCardsState([...cards])
    userData.watched.push(id)
    console.log(JSON.stringify(userData))
    }
export { toggleWatchedStatus };