const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const welcomeUser = () => {
    console.log('Hi There, Welcome to the server!');
}

// Listening for the userJoined event using the on() method
myEmitter.on('userJoined', welcomeUser);

// Emitting the userJoined event using the emit() method
myEmitter.emit('userJoined');