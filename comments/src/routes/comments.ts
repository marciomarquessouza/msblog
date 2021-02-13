import { randomBytes } from "crypto";
import { Router } from "express";
import axios from "axios";

const commentsByPostId = {};

export const commentsRoutes = (router: Router) => {
  router.post("/posts/:id/comments", async (req, res) => {
    const commentId = randomBytes(4).toString("hex");
    const postId = req.params.id;
    const { content } = req.body;
    const comments = commentsByPostId[postId] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[postId] = comments;

    await axios.post("http://localhost:4005/events", {
      type: "createComment",
      data: { id: commentId, postId, content },
    });
    res.status(201).send(comments);
  });

  router.get("/posts/:id/comments", (req, res) => {
    const postId = req.params.id;
    res.status(200).send(commentsByPostId[postId] || []);
  });

  router.post("/events", (req, res) => {
    console.log("Received Event", req.body.type);
    res.send({ status: "ok" });
  });
};
