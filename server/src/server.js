const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

//middlewares
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
//router
server.use(router);

module.exports = server;
