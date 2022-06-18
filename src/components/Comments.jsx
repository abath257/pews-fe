import { useState, useEffect } from "react";
import { getCommentsById } from "../utils/api";
import CommentsCard from "./CommentsCard";
import AddComment from "./AddComment";

const Comments = ({ comment_count, article_id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [countChange, setCountChange] = useState(0);
  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);
  const renderTrigger =comments.length
  useEffect(() => {
    getCommentsById(article_id).then((comments) => {
      console.log('here')
      setComments(comments);
    });
  }, [article_id, renderTrigger]);

  return (
    <>
      <section className="AddComment">
        <AddComment
          setComments={setComments}
          article_id={article_id}
          setCountChange={setCountChange}
        />
      </section>
      <section id="Comments">
        <h3>Comments: {comment_count + countChange}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? "No comments" : "See comments"}
        </button>
        {isOpen && (
          <CommentsCard
            comments={comments}
            setCountChange={setCountChange}
            setComments={setComments}
          />
        )}
      </section>
    </>
  );
};

export default Comments;
