import { Router } from "express";

export const moderationRoutes = (router: Router) => {
  router.post("/events", (req, res) => {
    console.log("Received Event", req.body.type);
    res.send({ status: "ok" });
  });
};
