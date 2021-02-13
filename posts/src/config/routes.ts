import { Express, Router } from "express";
import { createPost, listPosts } from "../routes";

export default (app: Express): void => {
  const router = Router();
  createPost(router);
  listPosts(router);
  app.use(router);
};
