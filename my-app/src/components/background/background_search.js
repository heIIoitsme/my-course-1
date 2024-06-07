import '../background/background-styles.css';
import React from 'react';
import {filterByString} from "../../global_const/search_results_const"


export default (props) => {
    return (
        <div class='background'>
            <div class='subheadline'>
                <a>
                    Результаты поиска:
                </a>
            </div>
            <div class='card_container_2'>
                {props.q && props.q.length > 0 ?
                    (filterByString(props.q).map(item => (
                    <div className='fullanimebox'>
                        <img src={ item.img }/>
                        <a>
                            <h1>{ item.ru_name }</h1>
                            { item.en_name }
                            <h2>{ item.sinops }</h2>
                        </a>
                    </div>
                    ))) : (<p >Отсуствуют результаты</p>)}
            </div>
        </div>
    )
}