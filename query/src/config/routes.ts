import { Express, Router } from "express";
import { queryRoutes } from "../routes";

export default (app: Express) => {
  const router = Router();
  queryRoutes(router);
  app.use(router);
};
