const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors")
const { readCoords, streamCoords} = require("./dataProvider") 

const app = express();
app.use(cors())
const server = http.createServer(app);
const io = new Server(server, {
  cors:{
    origin: "http://localhost:3001"
  }
});

const csvCoords = "./data/line1.csv";
const coords = readCoords(csvCoords)

io.on("connection", (socket) => {
  socket.emit("data", streamCoords(socket, coords))
});




const PORT = 3002 || process.env.PORT;
server.listen(PORT, () => console.log(`listening on ${PORT} port`))
