import '../main_selector/main_selector.css';
import Worldtop from './worldtop.js';
import Mytop from './mytop.js';
import Tags_selector from "./tags_selector";
import React from "react";

export default () => {
    return (
        <div>
            <div className='block'>
                <div className='subheadline'>
                    <a href="WorldTop">
                        Лучшие рейтинги
                    </a>
                </div>
                <Worldtop/>
                <br/>
                <div className='subheadline'>
                    <a href="MyAnime">
                        Мои оценки
                    </a>
                </div>
                <Mytop/>
                <br/>
                <div className='subheadline'>
                    <a>
                        Поиск по тегам
                    </a>
                </div>
                <Tags_selector/>
            </div>
        </div>
    )
}