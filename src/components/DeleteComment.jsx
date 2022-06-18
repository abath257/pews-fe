import { deleteComment } from "../utils/api";

const DeleteComment = ({ comment_id, setCountChange }) => {
  function handleClick(comment_id) {
    setCountChange((currCount) => {
      return currCount - 1;
    });
    deleteComment(comment_id).then(() => {});
  }

  return (
    <button
      onClick={() => {
        handleClick(comment_id);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteComment;
