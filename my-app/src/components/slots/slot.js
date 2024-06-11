import {cardList, WatchedStatus} from "../../global_const/card_const";
import React, {useState} from "react";
import {toggleWatchedStatus} from "../../global_const/watched_const";
import {userData} from "../../global_const/userProfile";

export function AllCards() {
    const [cards, setCardsState] = useState(cardList)
    return cards.map(item =>
        <div className='fullanimebox'>
            <img src={item.img}/>
            <a>
                <h1>{item.ru_name}</h1>
                {item.en_name}
                <h2>{item.sinops}</h2>
                <br/>Жанры: {item.tags.join(', ')}
            </a>
            <input
                type='checkbox'
                checked={item.watched === WatchedStatus.Watched}
                onChange={() => {
                    toggleWatchedStatus(item.id, cards, setCardsState)
                }}
            />
        </div>
    )
}

export const smallcard = (
    cardList.slice(0, 6).map(item =>
        (<div style={{width: '190px'}}>
                <div className='smallanimebox'>
                    <img src={item.img}/>
                    <a>
                        <h3>{item.ru_name}</h3>
                        {item.en_name}
                </a>
            </div>
        </div>
        )
    )
)

export const largecard = (
    cardList.slice(0, 3).map(item =>
        (
            <div className='largeanimebox'>
                <img src={ item.img }/>
                <a>
                    <h1>{ item.ru_name }</h1>
                    { item.en_name }
                    <h2>{ item.sinops }</h2>
                </a>
            </div>
        )
    )
)

export function ViewedCard() {
    console.log(JSON.stringify(userData))
    const viewedCards = cardList.filter(item => item.id === userData.watched)
    return viewedCards.map(item =>
        (
            <div className='fullanimebox'>
                <img src={ item.img }/>
                <a>
                    <h1>{ item.ru_name }</h1>
                    { item.en_name }
                    <h2>{ item.sinops }</h2>
                </a>
            </div>
        )
    )
}