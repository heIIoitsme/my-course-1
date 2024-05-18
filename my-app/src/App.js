import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home.js'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/'>
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
