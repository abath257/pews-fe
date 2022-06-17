import { useState, useEffect } from "react";
import { getCommentsById } from "../utils/api";
import CommentsCard from "./CommentsCard";
import AddComment from "./AddComment";

const Comments = ({ comment_count, article_id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);


  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);
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
      <footer className = "AddComment">
      <AddComment comments ={comments} setComments = {setComments} />
      </footer>
    </>
  );
};

export default Comments;
