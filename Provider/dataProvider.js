const fs = require("fs");
const { parse } = require("csv-parse");

const readCoords = (filename) => {
  const coords = [];
  const csvReader = fs.createReadStream(filename);
  csvReader
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", (row) => {
      const data = {
        lat: row[0],
        long: row[1],
        heading: row[2],
      };
      coords.push(data);
    })
    .on("error", (error) => {
      console.log(error);
    })
    .on("close", () => {
      // terminate connection
    });
  if (coords !== null) return coords;
};

const streamCoords = (socket, coords) => {
  let i = 0;
  const interval = setInterval(() => {
    i++;
    currentCoord = coords[i];
    socket.emit("data", currentCoord);
    if (i === coords.length - 1) {
      clearInterval(interval);
      socket.emit("data", "no more coords");
    }
  }, 1000);
};

module.exports = {
  readCoords,
  streamCoords,
};
