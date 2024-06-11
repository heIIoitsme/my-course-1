import './header-styles.css';
import SearchBar from "./search-bar";

export default () => {
    return (
            <header>
                <meta name="viewport" content="width=device-width, initial-scale=0.75"/>
                <a href="/"><img src="img/dontwait.png" alt="logo"/></a>
                <SearchBar/>
            </header>
    )
}