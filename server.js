const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

require("./routes/apiRoute")(app);

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
