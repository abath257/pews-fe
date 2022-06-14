import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
  <Header />
  <Home className="Home" />
  <Routes>
  <Route path ='/' element={<Home />} />
  <Route path ='/topics/:topic_id' element={<Home />} />
  </Routes>
  </div>
  
)}

export default App;
