import React from 'react';
import './media_style.css'
import Background_tags from "../components/background/background_tags";
import {useSearchParams} from "react-router-dom";



function TagRes() {
    const [searchParams] = useSearchParams();


    return (
        <div className='mstyle'>
            <Background_tags t={searchParams.get('t')}/>
        </div>
    )
}

export default TagRes