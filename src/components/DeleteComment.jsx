import React from 'react';
import { deleteComment } from '../utils/api';

const DeleteComment = ({comment_id}) => {
function handleClick(comment_id){
  
deleteComment(comment_id)
}


    return (
        <button onClick ={()=>{handleClick(comment_id)}}>Delete</button>
    )
};

export default DeleteComment;