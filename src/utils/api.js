import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://nc-positive-news.herokuapp.com/api",
});

export const getArticles = (slug) => {
  if (slug) {
    return articleApi
      .get("/articles", { params: { topic: `${slug}` } })
      .then(({ data }) => {
        return data.articles;
      });
  } else {
    return articleApi.get("/articles").then(({ data }) => {
      return data.articles;
    });
  }
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
