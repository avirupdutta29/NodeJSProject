const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn of Motor!');
  setTimeout(() => {
    console.log("Please turn of Motor ! It's a gentile reminder");
  }, 3000);
});

console.log("The script is running");
myEmitter.emit('WaterFull');
console.log("The script is still running");
