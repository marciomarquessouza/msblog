import { Express, Router } from "express";
import { createComment, listComments } from "../routes";

export default (app: Express): void => {
  const router = Router();
  createComment(router);
  listComments(router);
  app.use(router);
};
