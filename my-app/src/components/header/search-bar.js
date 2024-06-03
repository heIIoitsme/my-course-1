import React, {useState} from "react";
import {cardList} from "../../global_const/card_const";
import './header-styles.css';


 export const searchArr = cardList.filter(item =>
    item.ru_name.toLowerCase().includes(query.toLowerCase())
);

const SearchBar = () => {
    const [query, setQuery] = useState('');
    let [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            // Фильтрация cardList для поиска совпадений
            searchResults = cardList.filter(item =>
                item.ru_name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(searchResults)
        }
    };

    return (
        <header>
            <form action='/SearchRes' method="get">
                <input
                    className='searchstl'
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleSearch}
                    placeholder="Поиск..."
                />
            </form>
        </header>
)
};

export default SearchBar;