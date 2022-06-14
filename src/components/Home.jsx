import { useState, useEffect } from "react";

const Home = () => {
const [articles,setArticles] = useState([
    {
      "title": "Seafood substitutions are increasing",
      "topic": "cooking",
      "author": "weegembump",
      "body": "Text from the article..",
      "created_at": "2020-07-09T20:11:00.000Z"
    }
  ])

useEffect(()=>{

})


    return (
    <h1>Hello</h1> 
    );
};

export default Home;