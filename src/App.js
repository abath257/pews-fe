import Header from './components/Header';
import Articles from './components/Articles';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
  <Header />
 <Nav />
  <Routes>
  <Route path ='/' element={<Articles />} />
  <Route path ='/topics/:slug' element={<Articles/>} />
  </Routes>
  </div>
  
)}

export default App;
