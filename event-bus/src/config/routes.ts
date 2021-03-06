import { Express, Router } from "express";
import { eventsRoutes } from "../routes";

export default (app: Express) => {
  const router = Router();
  eventsRoutes(router);
  app.use(router);
};
