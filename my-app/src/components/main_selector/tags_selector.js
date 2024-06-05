import './main_selector.css';
import React from "react";
import Tag from '../checkbox/tags'
import {allTags} from "../../global_const/card_const";

export default () => {
    return (
        <div class='card_container'>
            <Tag allTags={allTags()} />
        </div>
    )
}