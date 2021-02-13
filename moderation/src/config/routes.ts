import { Router, Express } from "express";
import { moderationRoutes } from "../routes";

export default (app: Express) => {
  const router = Router();
  moderationRoutes(router);
  app.use(router);
};
