import axios from "axios";

const articleApi = axios.create({
    baseURL:'https://nc-positive-news.herokuapp.com/api'
})

export const getArticles = () =>{
    return articleApi.get('/articles').then(({data})=>{
        return data.articles
    })
}