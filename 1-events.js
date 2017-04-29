const events = require('events');
const eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
  console.log('connection succesful.');

  // Fire the data_received event
  eventEmitter.emit('data_received');
};

eventEmitter.on('connect', connectHandler);

eventEmitter.emit('connect');
console.log("Program Ended.");
