import { randomBytes } from "crypto";
import { Router } from "express";

const commentsByPostId = {};

export const createComment = (router: Router) => {
  router.post("/posts/:id/comments", (req, res) => {
    const commentId = randomBytes(4).toString("hex");
    const postId = req.params.id;
    const { content } = req.body;
    const comments = commentsByPostId[postId] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[postId] = comments;

    res.status(201).send(comments);
  });
};

export const listComments = (router: Router) => {
  router.get("/posts/:id/comments", (req, res) => {
    const postId = req.params.id;
    res.status(200).send(commentsByPostId[postId] || []);
  });
};
