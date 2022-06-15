import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:slug" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics/:topic/articles/:article_id" element={<SingleArticle />} />
        
      </Routes>
    </div>
  );
}

export default App;
