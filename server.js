

const express = require('express');
const app = express();

const { Server } = require("socket.io");

const http = require('http');
const path = require('path');

const server = http.createServer(app);

const io = new Server(server);



app.use(express.static(path.resolve('./public')));

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  // accept message from frontend
  socket.on('user-message', (message) => {
   
    console.log('new message of user \n'+ message);
    
    // send message to other clients
    // io.emit('message',message);
    io.emit('chat-message',{id : socket.id, text : message });
    
  });

});

app.get('/', (req, res)=>{
    return res.sendFile('/public/index.html');
});










server.listen(9000,()=> console.log('server started at http://localhost:9000'))
// const server = WebSockets.Server({

// })



// const express = require('express');
// const app = express();

// const {Server} = require('socket.io');
// const http = require('http');



// const server = http.createServer(app);


// const io = new Server(server);


// io.on('connection',(client)=> {
//   console.log('a user connected', client.id);

// })






