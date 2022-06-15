import { useState, useContext } from "react";
import { patchVotes } from "../utils/api";
import { UserContext } from "../contexts/User";

const Votes = ({ article_id, votes, author }) => {
  const  user  = useContext(UserContext);
  const [voteChange, setVoteChange] = useState(0);

  const handleClick = () => {
    setVoteChange((currVotes) => currVotes + 1);
    patchVotes(article_id).catch((err) => {
      setVoteChange((currVotes) => currVotes - 1);
    });
  };

  return (
    <>
      <p>{votes + voteChange} votes</p>
      <button onClick={handleClick} disabled={voteChange > 0 || user[0].username === author}>
        vote
      </button>
    </>
  );
};

export default Votes;
