import { useState, useEffect } from "react";

const Comments = ({comment_count ,article_id}) => {
const [comments, setComments] = useState( [
    {
      "comment_id": 3,
      "body": "some text here...",
      "votes": 100,
      "author": "Mitch",
      "created_at": "2020-07-09T20:11:00.000Z"
    }
  ])
const commentss = comments[0]
//   useEffect(()=>{
//     getCommentsById(article_id).then((comment)=>{
//     setArticle(article)
//     setIsLoading(false)
//     })},[])

    return (
      
        <section id = "Comments">
   <h3>Comments: {comment_count}</h3> 
   <span className ="Comments__main"><h3 className = "Comments__body">{commentss.body}</h3><h3 className="Comments.author">{commentss.author}</h3></span>
   <span className ="Comments__footer"><h4>{commentss.votes} Votes</h4><h4>{commentss.created_at}</h4></span>
   </section>
   
    );
};

export default Comments;