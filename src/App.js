import './App.css';
import Navigation from './components/Navigation';
import PlayersContainer from './components/PlayersContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <PlayersContainer />
      <Footer />
    </div>
  );
}

export default App;
