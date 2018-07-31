const express =  require('express');
const http = require('http');
const socketIO = require('socket.io');

//localhost port
const port = 4001;

//initialize express app
const app = express();

//server instance
const server = http.createServer(app);

//socket instance with server
const io = socketIO(server);

io.on('connection', socket =>{
    console.log('user connected')

    socket.on('disconnect', ()=>{
        console.log('user disconnected')
    })
})

server.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
