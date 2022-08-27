const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
};
emitter.on('april', callback1);

emitter.on('april', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('april', { message: 1 });
emitter.emit('april', { message: 2 });
emitter.removeAllListeners();
emitter.emit('april', { message: 3 });
