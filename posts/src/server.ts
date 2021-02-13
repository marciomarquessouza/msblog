import app from "./config/app";

const port = 4000;

app.get("/marcio", (req, res) => {
  res.send("Marcio");
});

app.listen(port, () => console.log(`Running on port ${port}`));
