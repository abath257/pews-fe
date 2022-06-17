import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";


const AddComment = ({ setComments, article_id, setCountChange}) => {
  const [newComment, setNewComment] = useState("");
  const user = useContext(UserContext);
  const [hasPosted, setHasPosted] = useState(false);

 

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasPosted(true);
    setCountChange((currCount)=>{return currCount + 1})
    postComment(article_id, user, newComment).then((commentFromApi) => {
      const newCommentObj = {
        body: commentFromApi.body,
        votes: commentFromApi.votes,
        author: commentFromApi.author,
        created_at: commentFromApi.created_at,
      };
      setComments((currComments) => {
        return [newCommentObj, ...currComments];
      });
    });
    setNewComment("");
    setHasPosted(false);
  };

  if (!hasPosted) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            id="commentbox"
            name="new-comment"
            placeholder="Enter your comment here..."
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
        </label>
        <button type="submit">Post comment</button>
      </form>
    );
  }

  return <p>Thanks for posting your article!!</p>;
};

export default AddComment;
