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
    client.on('click11', function(data) {
        relaychange(relay1, 1);
		console.log("relay11 change start"); 
    });
    client.on('click12', function(data) {
        relaychange(relay1, 2);
		console.log("relay12 change start"); 
    });
    client.on('click13', function(data) {
        relaychange(relay1, 3);
		console.log("relay13 change start"); 
    });
    client.on('click14', function(data) {
        relaychange(relay1, 4);
		console.log("relay14 change start"); 
    });
    client.on('click15', function(data) {
        relaychange(relay1, 5);
		console.log("relay15 change start"); 
    });
    client.on('click16', function(data) {
        relaychange(relay1, 6);
		console.log("relay16 change start"); 
    });
    client.on('click17', function(data) {
        relaychange(relay1, 7);
		console.log("relay17 change start"); 
    });
    client.on('click18', function(data) {
        relaychange(relay1, 8);
		console.log("relay18 change start"); 
    });
    client.on('click19', function(data) {
        relaychange(relay1, 9);
		console.log("relay19 change start"); 
    });
    client.on('click21', function(data) {
        relaychange(relay2, 1);
		console.log("relay21 change start"); 
    });
    client.on('click22', function(data) {
        relaychange(relay2, 2);
		console.log("relay22 change start"); 
    });
    client.on('click23', function(data) {
        relaychange(relay2, 3);
		console.log("relay23 change start"); 
    });
    client.on('click24', function(data) {
        relaychange(relay2, 4);
		console.log("relay24 change start"); 
    });
    client.on('click25', function(data) {
        relaychange(relay2, 5);
		console.log("relay25 change start"); 
    });
    client.on('click26', function(data) {
        relaychange(relay2, 6);
		console.log("relay26 change start"); 
    });
    client.on('click27', function(data) {
        relaychange(relay2, 7);
		console.log("relay27 change start"); 
    });
    client.on('click28', function(data) {
        relaychange(relay2, 8);
		console.log("relay28 change start"); 
    });
    client.on('click31', function(data) {
        relaychange(relay3, 1);
		console.log("relay31 change start"); 
    });
    client.on('click32', function(data) {
        relaychange(relay3, 2);
		console.log("relay32 change start"); 
    });
    client.on('click33', function(data) {
        relaychange(relay3, 3);
		console.log("relay33 change start"); 
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
            console.log('old relay1 stat', relay1stat);
            console.log("relay 1 changed");
            console.log('new relay 100', await client.stat());
            relay1stat = await client.stat();
            await client.delay(200);
            relay11 = client.status(1);
            relay12 = client.status(2);
            relay13 = client.status(3);
            relay14 = client.status(4);
            relay15 = client.status(5);
            relay16 = client.status(6);
            relay17 = client.status(7);
            relay18 = client.status(8);
        } else {console.log("relay 1 same");}
        await client.end();
    }, (err) => {
    console.log('error relay 1 status');
    });

    relay201.connect(relay2).then(async (client) => {
        await client.delay(500);
        if (relay2stat.toString() !== client.stat().toString()) {
            console.log('old relay2 stat', relay2stat);
            console.log("relay 2 changed");
            console.log('new relay 101', await client.stat());
            relay2stat = await client.stat();
            await client.delay(200);
            relay21 = client.status(1);
            relay22 = client.status(2);
            relay23 = client.status(3);
            relay24 = client.status(4);
            relay25 = client.status(5);
            relay26 = client.status(6);
            relay27 = client.status(7);
            relay28 = client.status(8);
        } else {console.log("relay 2 same");}
        await client.end();
    }, (err) => {
    console.log('error relay 2 status');
    });

    relay201.connect(relay3).then(async (client) => {
        await client.delay(500);
        if (relay3stat.toString() !== client.stat().toString()) {
            console.log('old relay3 stat', relay1stat);
            console.log("relay 3 changed");
            console.log('new relay 102', await client.stat());
            relay3stat = await client.stat();
            await client.delay(200);
            relay31 = client.status(1);
            relay32 = client.status(2);
            relay33 = client.status(3);
            relay34 = client.status(4);
            relay35 = client.status(5);
            relay36 = client.status(6);
            relay37 = client.status(7);
            relay38 = client.status(8);
        } else {console.log("relay 3 same");}
        await client.end();
    }, (err) => {
    console.log('error relay 3 status');
    });
    var tweet1 = {relay11f: relay11, relay12f: relay12, relay13f: relay13, relay14f: relay14, relay15f: relay15, relay16f: relay16, relay17f: relay17, relay18f: relay18, relay21f: relay21, relay22f: relay22, relay23f: relay23, relay24f: relay24, relay25f: relay25, relay26f: relay26, relay27f: relay27, relay28f: relay28, relay31f: relay31, relay32f: relay32, relay33f: relay33, relay34f: relay34, relay35f: relay35, relay36f: relay36, relay37f: relay37, relay38f: relay38}
    io.emit('relay123', tweet1);
}

setInterval( relaystatuscheck, 1000); 

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