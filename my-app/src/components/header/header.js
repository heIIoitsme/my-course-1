import logo from '../../logo.svg';
import './header-styles.css';
import React, { useState } from 'react';
import {cardList} from "../../global_const/card_const";
import SearchBar from "./search-bar";

export default () => {
    return (
        <header>
            <a href='/'><img src='img/dontwait.png'/></a>
            <SearchBar />
        </header>
    )
}