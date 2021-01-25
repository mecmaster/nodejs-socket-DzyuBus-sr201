
//Clock
    function clock() {
      let date = new Date();
      let hrs = date.getHours();
      let mins = date.getMinutes();
    
      hrs = hrs < 10 ? `0${hrs}` : hrs;
      mins = mins < 10 ? `0${mins}` : mins;
    
      let time = `${hrs}:${mins}`;
      setInterval(clock, 1000);
      document.getElementById("TimeNow").innerHTML = time;
    }
    
    clock();



// document.getElementById("LightsSalon1").style.opacity = 0.0;
// document.getElementById("LightsSalon2").style.opacity = 0.0;
// document.getElementById("LightsCoridor").style.opacity = 0.0;
// document.getElementById("LightsBedroomMain").style.opacity = 0.0;
// document.getElementById("LightsBedroom").style.opacity = 0.0;
// document.getElementById("LightsBath").style.opacity = 0.0;
// document.getElementById("LightsKitchen").style.opacity = 0.0;
// document.getElementById("LightsLeftPassanger").style.opacity = 0.0;
// document.getElementById("LightsRightPassanger").style.opacity = 0.0;
// document.getElementById("LightsNeon").style.opacity = 0.0;
// document.getElementById("LightsOutside").style.opacity = 0.0;

//document.getElementById("BathVentArrow").style.opacity = 0.0;
//document.getElementById("MainHeaterArrow").style.opacity = 0.0;
//document.getElementById("MainVentArrow").style.opacity = 0.0;
//document.getElementById("KitchenVentArrow").style.opacity = 0.0;
//document.getElementById("BedroomHeaterArrow").style.opacity = 0.0;

//document.getElementById("BedroomHeaterTank").style.opacity = 0.0;
//document.getElementById("WaterEmpty1").style.opacity = 0.0;
//document.getElementById("WaterEmpty").style.opacity = 0.0;
//document.getElementById("MainHeaterTank").style.opacity = 0.0;

//document.getElementById("BedroomFloorStair").style.opacity = 0.0;
//document.getElementById("BedroomFloorMain").style.opacity = 0.0;
//document.getElementById("BathroomFloor").style.opacity = 0.0;
var socket = io.connect();

socket.on('relay123', function(tweet1){
  console.log(tweet1);
  console.log(tweet1.relay11f);
  console.log(tweet1.relay12f);
//relay1 
    if (tweet1.relay11f == true) {
    console.log("11 on");
    var element = document.getElementById('LightsSalon1');
    element.classList.add("lighton");
  }
  else {
    console.log("11 off");
    var element = document.getElementById('LightsSalon1');
    element.classList.remove("lighton");
  };
//relay2 
  if (tweet1.relay12f == true) {
    console.log("12 on");
    var element = document.getElementById('LightsSalon2');
    element.classList.add("lighton");
  }
  else {
    console.log("12 off");
    var element = document.getElementById('LightsSalon2');
    element.classList.remove("lighton");
  };
//relay3 
  if (tweet1.relay13f == true) {
    console.log("13 on");
    var element = document.getElementById('LightsCoridor');
    element.classList.add("lighton");
  }
  else {
    console.log("13 off");
    var element = document.getElementById('LightsCoridor');
    element.classList.remove("lighton");
  };
//relay4 
  if (tweet1.relay14f == true) {
    console.log("14 on");
    var element = document.getElementById('LightsBedroomMain');
    element.classList.add("lighton");
  }
  else {
    console.log("14 off");
    var element = document.getElementById('LightsBedroomMain');
    element.classList.remove("lighton");
  };
//relay5 
  if (tweet1.relay15f == true) {
    console.log("15 on");
    var element = document.getElementById('LightsBedroom');
    element.classList.add("lighton");
  }
  else {
    console.log("15 off");
    var element = document.getElementById('LightsBedroom');
    element.classList.remove("lighton");
  };
//relay6 
  if (tweet1.relay16f == true) {
    console.log("16 on");
    var element = document.getElementById('LightsBath');
    element.classList.add("lighton");
  }
  else {
    console.log("16 off");
    var element = document.getElementById('LightsBath');
    element.classList.remove("lighton");
  };
//relay7 
  if (tweet1.relay17f == true) {
    console.log("17 on");
    var element = document.getElementById('LightsKitchen');
    element.classList.add("lighton");
  }
  else {
    console.log("17 off");
    var element = document.getElementById('LightsKitchen');
    element.classList.remove("lighton");
  };
//relay8 
  if (tweet1.relay18f == true) {
    console.log("18 on");
    var element = document.getElementById('LightsLeftPassanger');
    element.classList.add("lighton");
  }
  else {
    console.log("18 off");
    var element = document.getElementById('LightsLeftPassanger');
    element.classList.remove("lighton");
  };
//relay21 
  if (tweet1.relay21f == true) {
    console.log("21 on");
    var element = document.getElementById('LightsRightPassanger');
    element.classList.add("lighton");
  }
  else {
    console.log("21 off");
    var element = document.getElementById('LightsRightPassanger');
    element.classList.remove("lighton");
  };
//relay22 
  if (tweet1.relay22f == true) {
    console.log("22 on");
    var element = document.getElementById('LightsNeon');
    element.classList.add("lighton");
  }
  else {
    console.log("22 off");
    var element = document.getElementById('LightsNeon');
    element.classList.remove("lighton");
  };
//relay23 
  if (tweet1.relay23f == true) {
    console.log("23 on");
    var element = document.getElementById('LightsOutside');
    element.classList.add("lighton");
  }
  else {
    console.log("23 off");
    var element = document.getElementById('LightsOutside');
    element.classList.remove("lighton"); 
  };

});


// Lights Control
document.getElementById('LightsSalon1').onclick = function() {
    socket.emit('click11');
  };

document.getElementById('LightsSalon2').onclick = function() {
    socket.emit('click12');
  };

document.getElementById('LightsCoridor').onclick = function() {
  socket.emit('click13');
  };  

document.getElementById('LightsBedroomMain').onclick = function() {
  socket.emit('click14');
  };

document.getElementById('LightsBedroom').onclick = function() {
  socket.emit('click15');
  };

document.getElementById('LightsBath').onclick = function() {
  socket.emit('click16');
  };

document.getElementById('LightsKitchen').onclick = function() {
  socket.emit('click17');
  };

document.getElementById('LightsLeftPassanger').onclick = function() {
  socket.emit('click18');
  };

document.getElementById('LightsRightPassanger').onclick = function() {
  socket.emit('click21');
  };

document.getElementById('LightsNeon').onclick = function() {
  socket.emit('click22');
  };

document.getElementById('LightsOutside').onclick = function() {
  socket.emit('click23');
  };

// Control Buttons

document.getElementById('MainVentButton').onclick = function() {
      var element = document.getElementById('MainVentStaus');
      var element2 = document.getElementById('MainVentArrow');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };

document.getElementById('WaterStatusButton').onclick = function() {
      var element = document.getElementById('WaterStatus');
      element.classList.toggle("active");

  };

document.getElementById('WaterPumpButton').onclick = function() {
      var element = document.getElementById('Water1Status');
      element.classList.toggle("active");

  };

document.getElementById('KitchenVentButton').onclick = function() {
      var element = document.getElementById('KitchenVentStatus');
      var element2 = document.getElementById('KitchenVentArrow');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };

document.getElementById('WaterHeaterButton').onclick = function() {
      var element = document.getElementById('WaterHeaterStatus');
      element.classList.toggle("active");

  };

document.getElementById('BedroomHeaterButton').onclick = function() {
      var element = document.getElementById('BedroomHeaterStatus');
      var element2 = document.getElementById('BedroomHeaterArrow');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };

document.getElementById('BedroomFloorButton').onclick = function() {
      var element = document.getElementById('BedroomFloorHeaterStatus');
      var element2 = document.getElementById('BedroomFloorMain');
      var element3 = document.getElementById('BedroomFloorStair');
      element.classList.toggle("active");
      element2.classList.toggle("show");
      element3.classList.toggle("show");

  };

document.getElementById('BathVentButton').onclick = function() {
      var element = document.getElementById('BathVentStatus');
      var element2 = document.getElementById('BathVentArrow');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };

document.getElementById('BathroomFloorButton').onclick = function() {
      var element = document.getElementById('BathroomFloorHeaterStatus');
      var element2 = document.getElementById('BathroomFloor');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };

document.getElementById('MainHeaterButton').onclick = function() {
      var element = document.getElementById('MainHeaterStatus');
      var element2 = document.getElementById('MainHeaterArrow');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };  







