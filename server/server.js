
// require modules
const express = require('express');
const cors = require('cors');

const http = require('http');
const { Server } = require('socket.io');

// database connection
const connectDB = require('./database/connectionDB');
connectDB();


const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());


// importing the routes
const userRouter = require('./routes/users')




const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    }
});





//   socket connection and initialization

io.on('connection', (socket) => {
    
    console.log(`user connected: ${socket.id}`);
    // socket.on('join_room', (data) => {
    //     socket.join(data);
    //     console.log(`user with ID: ${socket.id} joined room: ${data}`);
    // });

    // send message to every connected client 
    socket.emit('welcome', 'Welcome to the server!');

    // receive message from client who use that event
    socket.on("client-message", (message) => {
        console.log(message);

        // send message to all connected clients
        io.emit("send-message", message);
    });


});

//          here my routes



app.get('/', (req, res)  => {
    res.send('server is running');
});



app.use('/', userRouter);










const PORT = 5000;

server.listen( PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
})