import '../main_selector/main_selector.css';
import {ViewedCard} from "../slots/slot";
import React from "react";

export default () => {
    return (
        <div>
            <div className='subheadline'>
                <a href="WorldTop">
                    Просмотренные аниме
                </a>
            </div>
            <div class='card_container_2'>
                <ViewedCard/>
            </div>
        </div>
)
}