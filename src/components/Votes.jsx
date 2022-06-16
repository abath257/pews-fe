import { useState, useContext } from "react";
import { patchVotes } from "../utils/api";
import { UserContext } from "../contexts/User";

const Votes = ({ article_id, votes, author }) => {
  const  user  = useContext(UserContext);
  const [voteChange, setVoteChange] = useState(0);

  const handleUpClick = () => {
    const vote = 1
    setVoteChange((currVotes) => currVotes + 1);
    patchVotes(article_id, vote).catch((err) => {
      setVoteChange((currVotes) => currVotes - 1);
    });
  };

  const handleDownClick = () =>{
    const vote = -1
    setVoteChange((currVotes) => currVotes - 1);
    patchVotes(article_id, vote).catch((err) => {
      setVoteChange((currVotes) => currVotes + 1);
    });
    
  }
  

  return (
    <>
      <p>{votes + voteChange} votes</p>
      <button onClick={handleUpClick} disabled={voteChange !==0 || user[0].username === author}>
        upvote
      </button>
      <button onClick={handleDownClick} disabled={voteChange !==0 || user[0].username === author}>
        downvote
      </button>
      <p>{user[0].username === author? "You cant vote for your own articles" : "Vote for this article"}</p>
    </>
  );
};

export default Votes;
