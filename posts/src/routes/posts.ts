import { randomBytes } from "crypto";
import { Router } from "express";
import axios from "axios";

const posts = {};

export const createPost = (router: Router) => {
  router.post("/posts", async (req, res) => {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    posts[id] = { id, title };

    await axios.post("http://localhost:4005/events", {
      type: "createPost",
      id,
      title,
    });

    res.status(201).send(posts);
  });
};

export const listPosts = (router: Router) => {
  router.get("/posts", (req, res) => {
    res.send(posts);
  });
};

export const events = (router: Router) => {
  router.post("/events", (req, res) => {
    console.log("Received Event", req.body.type);
    res.send({ status: "ok" });
  });
};
