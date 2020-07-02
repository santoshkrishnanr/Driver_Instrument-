# Driver_Instrument communication v0.1-

### Description
 
As per te image shown 
![](https://github.com/santoshkrishnanr/Driver_Instrument-/blob/master/connection1.jpg)

There is a Driver Demonstrator which requests the static weight for storage and an 
Instrument Demonstrator (Raspberry Pi) which gets connected to the instrument in this case (an analytical balance) 


### Instrument Demonstrator

The instrument Demonstrator gets connected to the analytical balance by USB.
When driver request for static weight by sending "S". [instrument.js](https://github.com/santoshkrishnanr/Driver_Instrument-/blob/master/Instrument/instrument.js) reads it and sends to instrument i.e analytical balance. the Instrument demonstrator later receives the weight or errors as described.(random values are used for demo).


### Driver Demonstrator
The Driver Demonstrator request the weight by sending "S" to the Instrument Demonstrator, receives the value and storing it for further calculation.

[drevestoage.js](https://github.com/santoshkrishnanr/Driver_Instrument-/blob/master/Driver/drivestorage.js) can be used to trigger the request and store it in [text1.txt](https://github.com/santoshkrishnanr/Driver_Instrument-/blob/master/Driver/write1.txt) with time strap for easy identification.

### Working
 [instrument.js](https://github.com/santoshkrishnanr/Driver_Instrument-/blob/master/Instrument/instrument.js) runs as a server near the instrument and listens for the request from the driver.
when a particular request is received to the server it sends the signal to the instrument by serially in USB and receives the static weight, if calculated or gives an error if not calculated.
[drevestoage.js](https://github.com/santoshkrishnanr/Driver_Instrument-/blob/master/Driver/drivestorage.js) justs sends the request to check if the instrument Demonstrator is online every second and for every 3 seconds it requests for static weight and stores it in a file [text1.txt](https://github.com/santoshkrishnanr/Driver_Instrument-/blob/master/Driver/write1.txt).

### Requirement
For development, you will need Node.js

### Running the Project 
Terminal 1 $ cd Driver_instrument/Instrument $ node instrument.js


Terminal 2 $ cd Driver_instrument/Driver $ node drivestorage.js



### Future Improvement

* Storing all the static weight  in a  temporary file in the raspberry pi and sharing when the driver gets connected and request the particular value.

* Using other different effective way of communication.

