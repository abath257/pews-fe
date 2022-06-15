import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../utils/api";

const SingleArticle = () => {
    const [isLoading, setIsLoading] = useState(true);
   const {article_id} = useParams()
   const[article,setArticle] = useState()
   

useEffect(()=>{
    getArticleById(article_id).then((article)=>{
    setArticle(article)
    setIsLoading(false)
    })})
    

    if (isLoading === true) return ",.....loading";   
    return (
    <>
    <main className = "main">
        <section id = "singlearticle">
    <h3>{article.topic}</h3><h2>{article.title}</h2>
    <h3>{article.author}</h3>
    <h4>{article.body}</h4>
    <h4>Time: {article.created_at}</h4>
    <h4>Votes: {article.votes}</h4>
    <h4>Comments: {article.comment_count}</h4>
    </section>
    </main>
    </>
    );
};

export default SingleArticle;