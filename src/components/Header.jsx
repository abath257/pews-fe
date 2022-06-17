import { useContext } from "react";
import { UserContext } from "../contexts/User";


const Header = () => {
const user = useContext(UserContext)

  return (
    <>
      <header className="header">
       <span id="header__title"><h1>Positive News</h1> <h4>logged in as: {user[0].username}</h4></span>
      </header>
    </>
  );
};

export default Header;
