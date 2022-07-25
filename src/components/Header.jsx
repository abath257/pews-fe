import { useContext } from "react";
import { UserContext } from "../contexts/User";


const Header = () => {
  const user = useContext(UserContext);

  return (
    <>
      <header>
        <h1>Pews</h1>
<h3>The Positive Northcoders News Site</h3>
     
    <h4>logged in as: {user[0].avatar_url}</h4> 
      </header>
    </>
  );
};

export default Header;
