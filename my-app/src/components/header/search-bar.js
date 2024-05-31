import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {cardList} from "../../global_const/card_const";
import './header-styles.css';


const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            // Фильтрация cardList для поиска совпадений
            const searchResults = cardList.filter(item =>
                item.ru_name.toLowerCase().includes(query.toLowerCase())
            );
            // Передача результатов поиска через состояние маршрутизатора
            navigate('/SearchRes', { state: { searchResults } });
        }
    };

    return (
        <header>
                <input
                    className='searchstl'
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleSearch}
                    placeholder="Поиск..."
                />
        </header>
    )
        ;
};

export default SearchBar;