'use strict';

const 
    fs=require('fs'),
    zmq=require('zmq'),
    vik_responder = zmq.socket('rep');

vik_responder.on('message',function(data){
    let requestData = JSON.parse(data);

    fs.readFile(requestData.file,function(err,content){
        let response = {
            fileMessage: content.toString(),
            timestamp: Date.now()            
        }
        vik_responder.send(JSON.stringify(response));
    })
})

vik_responder.bind('tcp://*:3000',function(err){
    console.log('waiting for some viking requester :)');
})

