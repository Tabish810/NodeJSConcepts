var events = require('events'); 
// events ...pehly on phr emit..first on pr aye ga uski basis pr emit dhonday ga
eventEmitter = new events.EventEmitter();

function openDoor() {
    console.log("ring ring ring");
    eventEmitter.emit('welcome', "welcome bro!"); //trigger event
}
eventEmitter.on('doorOpen', openDoor);
eventEmitter.on('welcome', function (message) {
    console.log(message);
});
eventEmitter.emit('doorOpen');