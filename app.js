const express = require ("express");
const app = express ();

const incident_routes = require("./src/config/routes/incident")
app.use("/api", incident_routes);
module.exports = app;