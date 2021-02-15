import { Router } from "express";

const posts = {};

export const handleEvents = (data, type) => {
  if (type === "createPost") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "createComment") {
    const { id, postId, content, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === "updateComment") {
    const { id, postId, content, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => comment.id === id);
    comment.status = status;
    comment.content = content;
  }
};

export const queryRoutes = (router: Router) => {
  router.get("/posts", (req, res) => {
    res.send(posts);
  });

  router.post("/events", (req, res) => {
    console.log("Received Event", req.body.type);
    const { type, data } = req.body;
    handleEvents(data, type);
    res.send({ status: "ok" });
  });
};
