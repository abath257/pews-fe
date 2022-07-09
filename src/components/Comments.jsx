import { useState, useEffect } from "react";
import { getCommentsById } from "../utils/api";
import CommentsCard from "./CommentsCard";
import AddComment from "./AddComment";

const Comments = ({ comment_count, article_id }) => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [countChange, setCountChange] = useState(0);
  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  useEffect(() => {
    getCommentsById(article_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, [article_id]);

  if (loading === true) return <h2 className="loading">",.....loading"</h2>;
  return (
    <>
      <section className="AddComment">
        <AddComment
          setComments={setComments}
          comments={comments}
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
            setComments={setComments}
            setCountChange={setCountChange}
          />
        )}
      </section>
    </>
  );
};

export default Comments;
