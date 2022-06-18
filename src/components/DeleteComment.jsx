import { deleteComment } from "../utils/api";

const DeleteComment = ({ comment_id, setCountChange, setRenderTrigger }) => {
  function handleClick(comment_id) {
    setCountChange((currCount) => {
      return currCount - 1;
    });
    deleteComment(comment_id).then(() => {
      setRenderTrigger((currNum) => {
        return currNum + 1;
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
