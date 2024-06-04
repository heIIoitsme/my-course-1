import React from 'react';
import './media_style.css'
import Background_search from "../components/background/background_search";
import {useSearchParams} from "react-router-dom";



function SearchRes() {
    const [searchParams] = useSearchParams();


    return (
        <div className='mstyle'>
            <Background_search q={searchParams.get('q')}/>
        </div>
    )
}

export default SearchRes