import { useState, useEffect } from "react";
import { getCommentsById } from "../utils/api";

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

  useEffect(()=>{
    getCommentsById(article_id).then((comments)=>{
    setComments(comments)
    })},[])

    return (
        <>
        <section id = "Comments">
   <h3>Comments: {comment_count}</h3>
   <ul className="comments__list">
   {comments.map((comments)=>{return <li key = {comments.comment_id}> <span className ="Comments__main"><h3 className = "Comments__body">{comments.body}</h3><h3 className="Comments.author">{comments.author}</h3></span>
   <span className ="Comments__footer"><h4>{comments.votes} Votes</h4><h4>{comments.created_at}</h4></span></li>})}
   </ul> 
   </section>
   </>
    );
};

export default Comments;