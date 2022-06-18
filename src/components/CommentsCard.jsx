import DeleteComment from "./DeleteComment";

const CommentsCard = ({ comments }) => {

  return (
    <div>
      <ul className="comments__list">
        {comments.map((comments) => {
          return (
            <li key={comments.comment_id} className="comments__listitem">
              {" "}
              <span className="Comments__main">
                <h3 className="Comments__body">{comments.body}</h3>
                <h3 className="Comments.author">{comments.author}</h3>
              </span>
              <span className="Comments__footer">
                <h4>{comments.votes} Votes</h4>
                <h4>{comments.created_at}</h4>
              </span>
              <DeleteComment comment_id = {comments.comment_id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsCard;
