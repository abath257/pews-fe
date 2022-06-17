import { useState, useContext} from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";


const AddComment = ({ comments, setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const  user  = useContext(UserContext);

  const handleSubmit = (event) =>{
    event.preventDefault()
    postComment(article_id,user,newComment).then((commentFromApi)=>{
    const newCommentObj = {body: commentFromApi.body,votes:commentFromApi.votes,author:commentFromApi.author,created_at:commentFromApi.created_at} 
    setComments((currComments)=>{return[newCommentObj, ...currComments]}) 
    setNewComment('')
    })}




  return (
      <form onSubmit={handleSubmit}>
<label>
    Post a new comment...
    <input
    type="text"
    name="new-comment"
    value={newComment}
    onChange={(event) => setNewComment(event.target.value)}
    />
</label>
<button type = 'submit'>Post comment</button>
      </form>
  
  );
  }

export default AddComment;



