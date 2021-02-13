import { Router } from "express";

const posts = {};

export const queryRoutes = (router: Router) => {
  router.get("/posts", (req, res) => {
    res.send(posts);
  });

  router.post("/events", (req, res) => {
    const { type, data } = req.body;
    if (type === "createPost") {
      const { id, title } = data;
      posts[id] = { id, title, comments: [] };
    }

    if (type === "createComment") {
      const { id, postId, content } = data;
      const post = posts[postId];
      post.comments.push({ id, content });
    }

    res.send({ status: "ok" });
  });
};
