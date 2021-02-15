import { Router } from "express";
import axios from "axios";

export const moderationRoutes = (router: Router) => {
  router.post("/events", async (req, res) => {
    console.log("Received Event", req.body.type);
    const { type, data } = req.body;

    if (type === "createComment") {
      const status = data.content.includes("orange") ? "rejected" : "approved";
      await axios.post("http://event-bus-srv:4005/events", {
        type: "moderateComment",
        data: {
          ...data,
          status,
        },
      });
    }

    res.send({ status: "ok" });
  });
};
