import { Express, Router } from "express";
import { postRoutes } from "../routes";

export default (app: Express): void => {
  const router = Router();
  postRoutes(router);
  app.use(router);
};
