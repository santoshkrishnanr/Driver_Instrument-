//A basic program to communicate our device with the weighing machine which gets connected with USB
//generating random weight for demo 

//const serialPort = require("serialport");
//const Readline = require("@serialport/paser-readline");

//const port = new serialport('/dev/ttyACM0',{baudrate:9600,
//    parser:serialport parsers.readline("\r\n") });


var static_weight = function(arr){
    //port.write("arr");
    //console.log('requesting static_weight');

    //let parser = new Readline();
    //port.pipe(parser);
    //parser.on("data",(line)=>console.log(line));

    //if (line == 'S I'){
    //    console.log('command not executable');
    //}else if(line == 'S +'){
    //    console.log('balance in overload');
    //}else if(line == 'S -'){
    //    console.log('balance in underload');
    //}else {
    //    return line;
   // }
        let s_weight = Math.floor(Math.random()* 100)+1;
        let time = new Date();
        let line = JSON.stringify({ t:time, static_weight:s_weight+'gm'})
        //console.log(line);

     return line ;

};


module.exports = static_weight;