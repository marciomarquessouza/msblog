import { Router } from "express";
import axios from "axios";

export const eventsRoutes = (router: Router) => {
  router.post("/events", (req, res) => {
    const event = req.body;
    console.log("received", event);
    axios.post("http://localhost:4000/events", event);
    axios.post("http://localhost:4001/events", event);
    axios.post("http://localhost:4002/events", event);
    res.send({ status: "ok" });
  });
};
