import {filterByString, tagsFromUrl} from "../../global_const/tags_results_const";
import React from "react";

export default (props) => {
    return (
        <div class='background'>
            <div class='subheadline'>
                <a>
                    Подходящие аниме:
                </a>
                <p>{tagsFromUrl()}</p>
            </div>
            <div class='card_container_2'>
                {props.t && props.t.length > 0 ?
                    (filterByString(props.t).map(item => (
                    <div className='fullanimebox'>
                        <img src={ item.img }/>
                        <a>
                            <h1>{ item.ru_name }</h1>
                            { item.en_name }
                            <h2>{ item.sinops }</h2>
                        </a>
                    </div>
                ))) : (<p >Отсуствует запрос</p>)}
            </div>
        </div>
    )
}