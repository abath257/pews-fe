import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";

const AddComment = ({ comments, setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const user = useContext(UserContext);
  const [hasPosted, setHasPosted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasPosted(true);
    postComment(article_id, user, newComment).then((commentFromApi) => {
      const newCommentObj = {
        body: commentFromApi.body,
        votes: commentFromApi.votes,
        author: commentFromApi.author,
        created_at: commentFromApi.created_at,
      };
      setComments((currComments) => {
        return [...currComments, newCommentObj];
      });
    });

    setNewComment("");
    setHasPosted(true);
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

  return <p>Please wait</p>;
};

export default AddComment;
