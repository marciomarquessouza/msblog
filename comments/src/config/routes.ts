import { Express, Router } from "express";
import { commentsRoutes } from "../routes";

export default (app: Express): void => {
  const router = Router();
  commentsRoutes(router);
  app.use(router);
};
