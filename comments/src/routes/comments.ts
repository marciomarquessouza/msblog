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
    const status = "pending";

    comments.push({ id: commentId, content, status });
    commentsByPostId[postId] = comments;

    await axios.post("http://event-bus-srv:4005/events", {
      type: "createComment",
      data: { id: commentId, postId, content, status },
    });

    res.status(201).send(comments);
  });

  router.get("/posts/:id/comments", (req, res) => {
    const postId = req.params.id;
    res.status(200).send(commentsByPostId[postId] || []);
  });

  router.post("/events", async (req, res) => {
    console.log("Received Event", req.body.type);
    const { type, data } = req.body;

    if (type === "moderateComment") {
      const { postId, id, status, content } = data;
      const comments = commentsByPostId[postId];
      const comment = comments.find((comment) => comment.id === id);
      comment.status = status;
      await axios.post("http://event-bus-srv:4005/events", {
        type: "updateComment",
        data: {
          id,
          status,
          postId,
          content,
        },
      });
    }

    res.send({ status: "ok" });
  });
};
