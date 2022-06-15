import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://nc-positive-news.herokuapp.com/api",
});

export const getArticles = (slug) => {
  return articleApi
    .get("/articles", { params: { topic: slug } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (article_id) => {
  return articleApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getTopics = () => {
  return articleApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const patchVotes = (article_id) => {
 return articleApi.patch(`/articles/${article_id}`, {inc_votes : 1}).then(({data})=>{
  return data.article
 })

}