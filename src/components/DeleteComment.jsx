import { deleteComment } from "../utils/api";

const DeleteComment = ({
  comments,
  setComments,
  setCountChange,
  comment_id,
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
          }) 
 setComments((currComments)=>{
    return [...currComments, comments]
})
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
