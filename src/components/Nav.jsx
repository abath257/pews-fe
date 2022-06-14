import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

export const Nav = () =>{
const[topics,setTopics] = useState([])

useEffect(()=>{
    getTopics().then((topicsFromApi)=>{
    console.log(topicsFromApi)
    setTopics(topicsFromApi)
    })
},[])

return(
<nav>
{topics.map((topic)=>{
return <Link to={`/topics/${topic.slug}`}><h3>{topic.slug}</h3></Link>  
})}    
</nav>   
)


}