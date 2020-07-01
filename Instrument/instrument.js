///A basic instrument demonstrator which acts like a server and communicate with instrument and  driver for storage.. 

const http = require('http')
const static_weight = require('./usb');



let server = http.createServer(function(req,res){
    console.log('Driver online:');
    console.log('listenig. and waiting for request')
    res.writeHead(200,{'Content-Type':'application/json'});
    

    
    if (req.url == '/S'){
       
        console.log('received '+req.url+' Driver has requested s_weight');
        var weight = (static_weight(['S']));
        setTimeout(function(){
        console.log('sending:'+ weight);
        res.end(weight);
    },2000);
    }
});

server.listen(3000,'127.0.0.1');
console.log('listening from driver ');
