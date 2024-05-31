import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js'
import Header from "./components/header/header";
import WorldTop from "./pages/WorldTop";
import SearchRes from "./pages/SearchRes";

function App() {
  return (
    <Router>
        <Header/>
        <div class='main'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/WorldTop' element={<WorldTop/>}/>
                <Route path='/SearchRes' element={<SearchRes/>}/>
            </Routes>
        </div>
    </Router>
)
}

export default App;
