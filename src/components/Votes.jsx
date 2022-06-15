import { useState } from "react";
import { patchVotes } from "../utils/api";

const Votes = ({ article_id, votes }) => {
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
      <button onClick={handleClick} disabled={voteChange > 0}>
        Vote for this article
      </button>
    </>
  );
};

export default Votes;
