import { useState } from "react";

const AddComment = ({ comments, setComments }) => {
  const [newComment, setNewComment] = useState("");

const handleSubmit = () =>{
    console.log("here")
}


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
};

export default AddComment;
