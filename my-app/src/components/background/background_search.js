import '../background/background-styles.css';
import React from 'react';
import {SearchResults} from '../slots/slot.js';

export default () => {
    return (
        <div class='background'>
            {SearchResults}
        </div>
    )
}