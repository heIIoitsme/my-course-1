import {cardList} from "../../global_const/card_const";
import React from "react";
import { useLocation } from 'react-router-dom';


export const allcards = (
    cardList.map(item =>
        <div className='fullanimebox'>
            <img src={item.img}/>
            <a>
                <h1>{item.ru_name}</h1>
                {item.en_name}
                <h2>{item.sinops}</h2>
            </a>
        </div>
    )
)

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

export const SearchResults = () => {
    const location = useLocation();
    const { searchResults } = location.state;

    return (
        <div>
            {searchResults.map((item) => (
                <div key={item.id}>{item.ru_name}</div>
            ))}
        </div>
    );
};