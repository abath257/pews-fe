import DeleteComment from "./DeleteComment";

const CommentsCard = ({ comments, setComments, setCountChange }) => {
  return (
    <div>
      <ul className="comments__list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comments__listitem">
              {" "}
              <span className="Comments__main">
                <h3 className="Comments__body">{comment.body}</h3>
                <h3 className="Comments.author">{comment.author}</h3>
              </span>
              <span className="Comments__footer">
                <h4>{comment.votes} Votes</h4>
                <h4>{comment.created_at}</h4>
              </span>
              <DeleteComment
                setComments={setComments}
                comment_id={comment.comment_id}
                setCountChange={setCountChange}
                comment={comment}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsCard;
