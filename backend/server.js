require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.info(`Web app has started and is running on Port: ${PORT}.`));
