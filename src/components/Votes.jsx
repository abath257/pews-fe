

const Votes = ({article,votes}) => {
  const handleClick = () =>{
    console.log(`giving ${article} a star`)
  }

return(
    <>
    <p>{votes} votes</p>
    <button onClick = {handleClick}>Vote for {article}</button>
    </>
)

};

export default Votes;