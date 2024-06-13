import {cardList, WatchedStatus} from "../../global_const/card_const";
import React, {useEffect, useState} from "react";
import {toggleWatchedStatus} from "../../global_const/watched_const";
import {userData} from "../../global_const/userProfile";

function getWatched() {
    const allId = localStorage.getItem('idWatched')
    if (allId === null || allId === '' ) return []
    return JSON.parse(allId)
}

export function AllCards() {
    const [idWatched, setIdWatched] = useState(getWatched())
    useEffect(() => {
        localStorage.setItem('idWatched', JSON.stringify(idWatched));
    }, [idWatched]);
    return cardList.map(item =>
        <div className='fullanimebox'>
            <img src={item.img}/>
            <a>
                <h1>{item.ru_name}</h1>
                {item.en_name}
                <h2>{item.sinops}</h2>
                <br/>Жанры: {item.tags.join(', ')}
                <br/><br/><label> Просмотрено
                <input
                    type='checkbox'
                    checked={idWatched.includes(item.id)}
                    onChange={() => {
                        toggleWatchedStatus(item.id, idWatched, setIdWatched)
                    }}
                />
            </label>
            </a>
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
    const watchedAnime = getWatched()
    console.log(watchedAnime)
    const viewedCards = cardList.filter(item => watchedAnime.includes(item.id))
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