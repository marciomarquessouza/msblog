import app from "./config/app";

const port = 4000;

app.listen(port, () => {
  console.log("v25.1");
  console.log(`Listening on port ${port}`);
});
