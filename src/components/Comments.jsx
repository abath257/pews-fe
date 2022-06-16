import { useState, useEffect } from "react";
import { getCommentsById } from "../utils/api";
import CommentsCard from "./commentsCard";

const Comments = ({ comment_count, article_id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsById(article_id).then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <section id="Comments">
        <h3>Comments: {comment_count}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? "No comments" : "See comments"}
        </button>
        {isOpen && <CommentsCard comments={comments} />}
      </section>
    </>
  );
};

export default Comments;
