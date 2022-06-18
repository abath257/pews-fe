import { useState, useEffect} from "react";
import { getArticles } from "../utils/api";
import SortBar from "./SortBar";
import { useParams, Link} from "react-router-dom";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState("date")
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();


 


  useEffect(() => {
    getArticles(slug, sort).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [slug]);

  if (isLoading === true) return <h2 className="main">",.....loading"</h2>;
  return (
    <main className="main">
      <SortBar setSort ={setSort}/>
      <p>Sorted by {sort}</p>
      <h2 id="articles__header">Positive news articles</h2>
      <ul id="articlesList">
        {articles.map((article) => {
          return (
            <li key={article.article_id} id="article">
              <span id="Home__article--title">
                <h3>{article.topic}</h3> <h2>{article.title}</h2>
              </span>
              <h3>{article.author}</h3>
              <p>{article.body}</p>
              <h3>{article.created_at}</h3>
              <Link to={`articles/${article.article_id}`}>
                <h3>View this story</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
