import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";

const AddComment = ({
  comments,
  setComments,
  article_id,
  setCountChange,
}) => {
  const [newComment, setNewComment] = useState("");
  const user = useContext(UserContext);
  const [hasPosted, setHasPosted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasPosted(true);
    setCountChange((currCount) => {
      return currCount + 1;
    });
    const date = new Date().toISOString();
    const newCommentObj = {
      body: newComment,
      votes: 0,
      author: user.username,
      created_at: date,
    };
    setComments([...comments, newCommentObj]);
    postComment(article_id, user, newComment).catch((err) => {
      setComments((currComments) => {
        return currComments.slice(-1);
      });
      setCountChange((currCount) => {
        return currCount + 1;
      })
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
