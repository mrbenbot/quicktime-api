const express = require("express");
const app = express();
const shell = require("shelljs");

const port = 5000;

app.get("/start", (req, res) => {
  shell.exec("./start.sh");
  res.send({ success: true, message: "recording has started" });
});
app.get("/stop/:name", (req, res) => {
  shell.exec(`./stop.sh`);
  res.send({ success: true, message: `${name} recording has finished` });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
