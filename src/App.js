import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
  <Header />
  <Home className="Home" />
  <Route></Route>
    </div>
  );
}

export default App;
