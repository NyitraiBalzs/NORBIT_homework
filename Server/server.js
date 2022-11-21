const { io } = require("socket.io-client");
const { Server } = require("socket.io");
const cors = require("cors");
const express = require("express");
const http = require("http");
const {
  addUser,
  getCurrentUser,
  userLeave,
  getUsernames,
} = require("./utility/user");
const app = express();
app.use(cors());
const server = http.createServer(app);

const clientIo = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const providerSocket = io.connect("http://localhost:3002");

// runs when client connects to the server
clientIo.on("connection", (socket) => {
  console.log("client connected!");
  socket.emit("recive_usernames", getUsernames());
  // runs when recives data
  providerSocket.on("data", (data) => {
    clientIo.emit("coord", data);
  });
  socket.on("add_username", (username) => {
    addUser(username, socket.id);
    clientIo.emit("recive_usernames", getUsernames());
  });

  // when user leaves the server
  socket.on("disconnect", () => {
    user = userLeave(socket.id);
    if (user) {
      clientIo.emit("recive_usernames", getUsernames());
    }
  });
});

const PORT = 3001 || process.env.SERVER_PORT;

server.listen(PORT, () => console.log(`listen on ${PORT} port`));
