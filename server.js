// server.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app); 
var io = require('socket.io')(server);
var relay201 = require('./relay201_module/index.js');

// relay variables - ip
const relay1 = "192.168.80.100";
const relay2 = "192.168.80.101";
const relay3 = "192.168.80.102";

// relay states
var relay1stat = [];
var relay2stat = [];
var relay3stat = [];

var relay11 = new Boolean(false);
var relay12 = new Boolean(false);
var relay13 = new Boolean(false);
var relay14 = new Boolean(false);
var relay15 = new Boolean(false);
var relay16 = new Boolean(false);
var relay17 = new Boolean(false);
var relay18 = new Boolean(false);
var relay21 = new Boolean(false);
var relay22 = new Boolean(false);
var relay23 = new Boolean(false);
var relay24 = new Boolean(false);
var relay25 = new Boolean(false);
var relay26 = new Boolean(false);
var relay27 = new Boolean(false);
var relay28 = new Boolean(false);
var relay31 = new Boolean(false);
var relay32 = new Boolean(false);
var relay33 = new Boolean(false);
var relay34 = new Boolean(false);
var relay35 = new Boolean(false);
var relay36 = new Boolean(false);
var relay37 = new Boolean(false);
var relay38 = new Boolean(false);

//keep track of how times clients have clicked the button
var clickCount = 0;

app.use(express.static(__dirname + '/public')); 
//redirect / to our index.html file
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(client) { 
	console.log('Client connected...'); 
	//when the server receives clicked message, do this
    client.on('clicked', function(data) {
    	  clickCount++;
		  //send a message to ALL connected clients
		  io.emit('buttonUpdate', clickCount);
    });
});

//start our web server and socket.io server listening
server.listen(3000, function(){
  console.log('listening on *:3000');
}); 

//relay functions
function relaychange(relayIPNum, relayNum) {
    relay201.connect(relayIPNum).then(async (client) => {
            await client.delay(200);
            console.log(client.status(relayNum));
            if (client.status(relayNum) === true) {
                    await client.off(relayNum);
                    console.log('status turn off', relayNum, client.status(relayNum));
            } else {
                    await client.on(relayNum);
                    console.log('status turn on', relayNum, client.status(relayNum));
            }
            await client.end();
    }, (err) => {
            console.log(err);
    });
}

function relayonofftemplate(relayIPNum, relayNum) {
    relay201.connect(relayIPNum).then(async (client) => {
            console.log('status', relayNum, client.status(relayNum));
            await client.on(relayNum);
            await client.delay(2000);
            await client.off(relayNum);
            console.log('status', relayNum, client.status(relayNum));
            await client.end();
    }, (err) => {
            console.log('error onoff');
    });
}
    

function relaystatuscheck() {
    relay201.connect(relay1).then(async (client) => {
        await client.delay(500);
        if (relay1stat.toString() !== client.stat().toString()) {
            console.log('old relay stat', relay1stat);
            console.log("relay 1 changed");
            console.log('new relay 100', await client.stat());
            relay1stat = await client.stat();
            console.log('new relay stat', relay1stat);
            console.log('relay11 stat', relay1stat[0]);
            relay11 = client.status(1);
            io.emit('relay11', relay11);
            relay12 = client.status(2);
            io.emit('relay12', relay12);
            relay13 = client.status(3);
            io.emit('relay13', relay13);
            relay14 = client.status(4);
            io.emit('relay14', relay14);
            relay15 = client.status(5);
            io.emit('relay15', relay15);
            relay16 = client.status(6);
            io.emit('relay16', relay16);
            relay17 = client.status(7);
            io.emit('relay17', relay17);
            relay18 = client.status(8);
            io.emit('relay18', relay18);
        } else {console.log("relay 1 same");}

        await client.end();
    }, (err) => {
    console.log('error relay 1 status');
    });

    relay201.connect(relay2).then(async (client) => {
        await client.delay(500);
        relay28 = client.status(8);
        await client.end();
    }, (err) => {
    console.log('error relay 2 status');
    });

    relay201.connect(relay3).then(async (client) => {
        await client.delay(500);
        relay36 = client.status(6);
        await client.end();
    }, (err) => {
    console.log('error relay 3 status');
    });
}

setInterval( relaystatuscheck, 3000); 

function relaydemo(){
    setTimeout(() => {
        relaychange(relay1, 2);
        }, 3000);
        
    setTimeout(() => {
        console.log('Relay 11 outside', relay11);
        console.log('Relay 28 outside', relay28);
        console.log('Relay 36 outside', relay36);      
        }, 5000);
}