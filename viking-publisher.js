'use strict'
const
    fs=require('fs'),
    zmq=require('zmq'),
    vik_publisher = zmq.socket('pub'),
    filename = process.argv[2];


fs.watch(filename,function(){
    vik_publisher.send(JSON.stringify({
        type:'changed',
        file: filename,
        timestamp: Date.now()
    }))
})


vik_publisher.bind('tcp://*:3000',function(err){
    console.log('Listening for some viking subscriber');
})
