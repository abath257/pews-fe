import { deleteComment } from "../utils/api";

const DeleteComment = ({
  setComments,
  setCountChange,
  comment_id,
  comment,
}) => {
  function handleClick() {
    setCountChange((currCount) => {
      return currCount - 1;
    });
    setComments((currComments) => {
      return currComments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
    });
    deleteComment(comment_id).catch((err) => {
      setCountChange((currCount) => {
        return currCount + 1;
      });
      setComments((currComments) => {
        return [...currComments];
      });
    });
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
