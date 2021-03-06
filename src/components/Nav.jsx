import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <nav className="nav">
     
        <Link to={`/`} id="nav__link">
          <h3>home</h3>
        </Link>
        {topics.map((topic) => {
          return (
            <Link to={`/topics/${topic.slug}`} id="nav__link">
              <h3>{topic.slug}</h3>
            </Link>
          );
        })}
 
    </nav>
  );
};
