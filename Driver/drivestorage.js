
//basic program example to request the weight and store it in driver.

//for requesting the static weight 
const http = require('http');
const option = {
    hostname : "127.0.0.1" ,
    port : 3000 ,   
    path : "/S"
   }
// for checking for connection. 
const option1 = {
    hostname : "127.0.0.1" ,
    port : 3000 ,   
    path : "/"
   }
   
    
    callback = function (resp){
       
    resp.on('data',function (data){  
    let weight = data.toString()    
    console.log('Received'+ weight);  
    
    // to store the data in a file for data storage.
    let fs = require('fs');
    fs.appendFile('write1.txt',weight, (error) => {/* handle error*/});
    console.log('data saved')
    });  
    }
    
    //to check if the instruement is online 
    console.log('initialising connection with instrument ')  
    setInterval(function(){
        http.request(option1,callback).end();  
        console.log('Instrument online.. ')    
     },3000);

     //To request weight.
     setInterval(function(){
    http.request(option,callback).end();
    console.log('Requesting static weight')  
    },8000);