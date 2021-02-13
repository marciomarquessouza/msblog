import { Express, Router } from "express";
import { events } from "../routes";

export default (app: Express) => {
  const router = Router();
  events(router);
  app.use(router);
};
