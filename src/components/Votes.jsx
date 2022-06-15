import { useEffect, useState } from "react";
import { patchVotes } from "../utils/api";

const Votes = ({article_id,votes}) => {
const [voteChange, setVoteChange] = useState()
  const handleClick = () =>{
  patchVotes(article_id,1).then((updatedUser)=>{
    console.log(updatedUser)
  }).catch((err)=>{
    console.dir(err)
  })
  }

return(
    <>
    <p>{votes} votes</p>
    <button onClick = {handleClick}>Vote for this article</button>
    </>
)

};

export default Votes;