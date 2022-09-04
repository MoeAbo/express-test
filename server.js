const express = require("express");

const port = process.env.PORT || 3000;

const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
});

httpServer.listen(port, () =>
  console.log(`your app listening on port ${port}!`)
);
