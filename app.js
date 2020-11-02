const express = require("express");
const socketio = require("socket.io");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

const server = app.listen(PORT, () =>
  console.log("Server is Running on PORT " + PORT)
);

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New user connected");
});
