'use strict'
const
    fs=require('fs'),
    zmq=require('zmq'),
    vik_publisher = zmq.socket('pub'),
    filename = "/test.txt"


fs.watch(filename,function(){
    fs.readFile(filename, "utf8",function(err,content){
        if (!err){
            console.log('Someone change the file, i\'ll notify the other vikings')
            vik_publisher.send(JSON.stringify({
                type:'changed',
                file: filename,
                timestamp: Date.now(),
                content: content,
                })
            )
        }        
    })    
})


vik_publisher.bind('tcp://*:3000',function(err){
    console.log('Listening for some viking subscriber');
})
