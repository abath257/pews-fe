import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import {UserContext} from "./contexts/User"

function App() {
  const[user, setUser] = useState([{
    "username": "testuse "
  }])
    
  
  return (
    <UserContext.Provider value={user}>
      <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:slug" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route
          path="/topics/:topic/articles/:article_id"
          element={<SingleArticle />}
        />
      </Routes>
    </div>
  </UserContext.Provider>
  
  );
}

export default App;
