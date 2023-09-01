const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;
app.use(cors());

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});


let users = []
io.on('connection', socket => {
    // console.log(socket);
    console.log(socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
    socket.on('join-server', username => {
        console.log('USERNAME', username);
        let newUser = {id:socket.id, username:username}
        users.push(newUser)
        console.log(users);
        // socket.broadcast.emit()

        io.emit('new-user-joined', users)
    })
    socket.on('send-message', data => {
        console.log(data);
        io.emit('send-message-to-all-clients', data)
    })
})