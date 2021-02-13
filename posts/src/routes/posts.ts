import { randomBytes } from "crypto";
import { Router } from "express";

const posts = {};

export const createPost = (router: Router) => {
  router.post("/posts", (req, res) => {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    posts[id] = { id, title };
    res.status(201).send(posts);
  });
};

export const listPosts = (router: Router) => {
  router.get("/posts", (req, res) => {
    res.send(posts);
  });
};
