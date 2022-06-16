import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../utils/api";
import Votes from "./Votes";
import Comments from "./Comments";

const SingleArticle = () => {
    const [isLoading, setIsLoading] = useState(true);
   const {article_id} = useParams()
   const[article,setArticle] = useState()
   

useEffect(()=>{
    getArticleById(article_id).then((article)=>{
    setArticle(article)
    setIsLoading(false)
    })},[])
    
const handleCommentsClick =() =>{
    
}

//get our comments here


    if (isLoading === true) return (<h2 className="main">",.....loading"</h2>)
    return (
    <>
    <main className = "main">
        <section id = "singlearticle">
    <h3>{article.topic}</h3><h2>{article.title}</h2>
    <h3>{article.author}</h3>
    <h4>{article.body}</h4>
    <h4>Time: {article.created_at}</h4>
    <Votes article_id = {article.article_id} votes ={article.votes} author = {article.author} />
    <Comments comment_count = {article.comment_count} article_id = {article_id} />
    </section>
    </main>
    </>
    );
};

export default SingleArticle;