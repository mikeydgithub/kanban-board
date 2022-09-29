// set up a simple node.js server usign express.js. 
// return a json object when you visit http://localhost:4000/api in your browser
// cors allows communication between different domains
// express provides several features for building web applications in node
// nodemon automatically restarts the server after detecting file changes
// socketio allows us to configure a real time connection on the server

// express
const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// cors
const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

// socketIO
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

// the connection creates a unique id for each socket and logs id to the console whenever a user visits the web page.
// when you refresh or close the web page, the socket fires the disconnect event showing the user has disconnected from the socket.
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        socket.disconnect()
        console.log('🔥: A user disconnected');
    });
});

// json request
app.get("/api", (req, res) => {
    res.json({
        message: "Hello World",
    });
});

// http port listen
http.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});