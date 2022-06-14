import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
  <Header />
 <Nav />
  <Routes>
  <Route path ='/' element={<Home />} />
  <Route path ='/topics/:topic_id' element={<Home />} />
  </Routes>
  </div>
  
)}

export default App;
