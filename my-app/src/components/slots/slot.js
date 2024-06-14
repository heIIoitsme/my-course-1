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
    return cardList.sort((a, b) => b.rate - a.rate).map(item =>
        <div className='fullanimebox'>
            <img src={item.img}/>
            <div className='fullanimebox_text'>
                <a>
                    <h1><a>{item.ru_name}</a><a>{item.rate}</a></h1>
                    {item.en_name}
                    <h2>{item.sinops}</h2>
                    <br/>Жанры: {item.tags.join(', ')}
                </a>
                <label className='viewed_container'> Просмотрено
                    <input
                        type='checkbox'
                        checked={idWatched.includes(item.id)}
                        onChange={() => {
                            toggleWatchedStatus(item.id, idWatched, setIdWatched)
                        }}
                    />
                </label>
            </div>
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
                <div className='fullanimebox_text'>
                    <a>
                    <h1>{ item.ru_name }</h1>
                    { item.en_name }
                    <h2>{ item.sinops }</h2>
                    </a>
                </div>
            </div>
        )
    )
}

export function SmallViewedCard() {
    const watchedAnime = getWatched()
    console.log(watchedAnime)
    const viewedCards = cardList.filter(item => watchedAnime.includes(item.id))
    
    if (viewedCards.length === 0) {
        return <p>Нет просмотренных аниме</p>
    }
    return viewedCards.slice(0, 6).map(item =>
        (
            <div style={{width: '190px'}}>
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
}