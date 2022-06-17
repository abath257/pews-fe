import { useState, useEffect} from "react";
import { getCommentsById } from "../utils/api";
import CommentsCard from "./CommentsCard";
import AddComment from "./AddComment";

const Comments = ({ comment_count, article_id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const[countChange,setCountChange] = useState(0)



  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);
  
  
  useEffect(() => {
    getCommentsById(article_id).then((comments) => {
      setComments(comments)
    });
  }, [article_id]);
 
  return (
    <>
        <section className = "AddComment">
      <AddComment  setComments = {setComments} article_id ={article_id} countchange ={countChange} setCountChange ={setCountChange} />
      </section>
      <section id="Comments">
        <h3>Comments: {comment_count + countChange}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? "No comments" : "See comments"}
        </button>
        {isOpen && <CommentsCard comments={comments} />}
      </section>
  
    </>
  );
};

export default Comments;
