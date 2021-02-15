import { Router } from "express";
import axios from "axios";

const events = [];

export const eventsRoutes = (router: Router) => {
  router.post("/events", (req, res) => {
    const event = req.body;

    events.push(event);

    axios.post("http://posts-clusterip-srv:4000/events", event);
    // axios.post("http://localhost:4001/events", event);
    // axios.post("http://localhost:4002/events", event);
    // axios.post("http://localhost:4003/events", event);

    res.send({ status: "ok" });
  });

  router.get("/events", (req, res) => {
    res.send(events);
  });
};
