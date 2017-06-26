'use strict';
const   
    zmq = require('zmq'),
    filename = process.argv[2],
    vik_requester = zmq.socket('req');

vik_requester.on('message',function(data){
    let responseData = JSON.parse(data);
    console.log("The response from the viking reply is: "+responseData.fileMessage);
});

vik_requester.connect("tcp://127.0.0.1:3000");
let request = {
    file:filename
}
vik_requester.send(JSON.stringify(request));