import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js'
import Header from "./components/header/header";


function App() {
  return (
    <Router>
        <div>
            <Header/>
        </div>
        <div class='main'>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    </Router>
)
}

export default App;
