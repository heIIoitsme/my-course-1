
import './header-styles.css';


const SearchBar = () => {


    return (
        <header>
            <form action="/SearchRes">
                <input
                    className='searchstl'
                    type="search"
                    name="q"
                    placeholder="Поиск..."
                />
            </form>
        </header>
)
};

export default SearchBar;