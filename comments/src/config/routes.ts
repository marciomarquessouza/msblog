import { Express, Router } from "express";
import * as routes from "../routes";

export default (app: Express): void => {
  const router = Router();
  routes.createComment(router);
  routes.listComments(router);
  routes.events(router);

  app.use(router);
};
