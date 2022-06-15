import { useParams, useState } from "react-router-dom";

const SingleArticle = () => {
   const {article_id} = useParams()
   const[article,setArticle] = useState({
      "article_id": 1,
      "title": "Running a Node App",
      "topic": "coding",
      "author": "jessjelly",
      "body": "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
      "created_at": "2020-11-07T06:03:00.000Z",
      "votes": 0,
      "comment_count": 8
    })
   
    return (
    <>
    <h3>{article.topic}</h3><h2>{article.title}</h2>
    <h3>{article.author}</h3>
    <h4>{article.body}</h4>
    <h4>{article.created_at}</h4>
    <h4>{article.votes}</h4>
    <h4>{article.comment_count}</h4>
    </>
    );
};

export default SingleArticle;