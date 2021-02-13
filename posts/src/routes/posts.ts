import { randomBytes } from "crypto";
import { Router } from "express";
import axios from "axios";

const posts = {};

export const postRoutes = (router: Router) => {
  router.post("/posts", async (req, res) => {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    posts[id] = { id, title };

    await axios.post("http://localhost:4005/events", {
      type: "createPost",
      data: { id, title },
    });

    res.status(201).send(posts);
  });

  router.get("/posts", (req, res) => {
    res.send(posts);
  });

  router.post("/events", (req, res) => {
    console.log("Received Event", req.body.type);
    res.send({ status: "ok" });
  });
};
