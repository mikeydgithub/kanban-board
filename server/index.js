// set up a simple node.js server usign express.js. 
// return a json object when you visit http://localhost:4000/api in your browser
// cors allows communication between different domains
// express provides several features for building web applications in node
// nodemon automatically restarts the server after detecting file changes
// socketio allows us to configure a real time connection on the server

const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
    res.json({
        message: "Hello World",
    });
});

http.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});