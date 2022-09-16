const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("design/design-lp.html");
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
