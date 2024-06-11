import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js'
import Header from "./components/header/header";
import WorldTop from "./pages/WorldTop";
import SearchRes from "./pages/SearchRes";
import TagRes from "./pages/TagRes";
import MyAnime from "./pages/MyAnime";

function App() {
  return (
    <Router>
        <Header/>
        <div class='main'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/WorldTop' element={<WorldTop/>}/>
                <Route path='/SearchRes' element={<SearchRes/>}/>
                <Route path='/TagRes' element={<TagRes/>}/>
                <Route path='/MyAnime' element={<MyAnime/>}/>
            </Routes>
        </div>
    </Router>
)
}

export default App;
