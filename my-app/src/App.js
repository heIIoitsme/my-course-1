import './App.css';
import Header from './components/header/header.js';
import Background from './components/background/background.js';

const HomePage = () => {
  // Здесь может быть логика для загрузки данных для HomePage
  return (
    <div>
      <Header />
      <Background />
    </div>
  );
};

const TopPage = () => {
  // Здесь может быть логика для загрузки данных для AboutPage
  return;
}

function App() {
  return (
    <div class='main'>
      <Header />
      <Background />
    </div>
  );
}

export default App;
