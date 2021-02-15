import app from "./config/app";
import axios from "axios";
import { handleEvents } from "./routes";

const port = 4002;

app.listen(port, async () => {
  console.log(`Listening on port ${port}`);
  const res = await axios.get("http://event-bus-srv:4005/events");

  for (let event of res.data) {
    console.log("Processsing event:", event.type);
    handleEvents(event.data, event.type);
  }
});
