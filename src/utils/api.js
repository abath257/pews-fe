import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://pews-be.herokuapp.com/api",
});

export const getArticles = (slug, sort, order) => {
  return articleApi
    .get("/articles", { params: { topic: slug, sort_by: sort, order: order } })
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

export const patchVotes = (article_id, vote) => {
  return articleApi
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.article;
    });
};

export const getCommentsById = (article_id) => {
  return articleApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (article_id, user, newComment) => {
  const name = user[0].username;
  return articleApi
    .post(`/articles/${article_id}/comments`, {
      username: name,
      body: newComment,
    })
    .then(({ data }) => {
      return data.comment;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteComment =(comment_id)=>{
return articleApi.delete(`/comments/${comment_id}`).then(({data})=>{
return "message deleted"
})  
}