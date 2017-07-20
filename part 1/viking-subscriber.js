'use strict'
const   
    zmq = require('zmq'),
    viking_subscriber = zmq.socket('sub');


viking_subscriber.subscribe("");
viking_subscriber.on("message",function(data){
    let 
        message = JSON.parse(data),
        date = new Date(message.timestamp);
        console.log("Viking modify the file: "+ message.file + " chenage at "  + date);
        console.log("\n Message : "+ message.content);
});

viking_subscriber.connect("tcp://localhost:3000");