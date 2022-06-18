import React from "react";
import { deleteComment } from "../utils/api";

const DeleteComment = ({ comment_id, setCountChange }) => {
 
  function handleClick(comment_id) {
    setCountChange((currCount) => currCount - 1);
    deleteComment(comment_id).catch((err) => {
      setCountChange((currCount) => currCount + 1);
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
