import { useContext } from "react";
import { UserContext } from "../contexts/User";


const Header = () => {
  const user = useContext(UserContext);

  return (
    <>
      <header>
        <h1>Pews</h1>
         {/* <img src={ require  ("../images/7.png")} alt = "A yellow half sun against an orange background" id = "header_img"/> */}
          {/* <h1>Positive News</h1> <h4>logged in as: {user[0].username}</h4> */}
      </header>
    </>
  );
};

export default Header;
