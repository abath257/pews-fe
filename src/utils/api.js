import axios from "axios";

const articleApi = axios.create({
    baseURL:'https://nc-positive-news.herokuapp.com/api'
})

export const getArticles = (slug) =>{
    console.log(slug)
    return articleApi.get('/articles?',{params: {topic :`${slug}`}}).then(({data})=>{
        return data.articles
    })
}

export const getTopics = () =>{
    return articleApi.get('/topics').then(({data})=>{
    return data.topics
    })
}