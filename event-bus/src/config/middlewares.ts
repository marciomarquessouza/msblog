import { Express } from "express";
import { bodyParser } from "../middlewares";

export default (app: Express) => {
  app.use(bodyParser);
};
