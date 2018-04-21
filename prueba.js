class sumas {
  constructor(num1,num2,num3,num4) {
    this.num1=num1
    this.num2=num2
    this.num3=num3
    this.num4=num4
  }
  sumar(){
    console.log("la suma de "+this.num1+"+"+this.
    num2+" es");
    return this.num1+this.num2;
  }
  sumarm(){
    console.log("mira esto we");
    return this.num1+this.num2+this.num3+this.num4;
  }
}
var suma1 = new sumas(50,100);
var x = suma1.sumar();
console.log(x);
var suma2 = new sumas(250,360);
var z = suma2.sumar();
console.log(z);
var suma3 = new sumas(500,300,200);
var a = suma3.sumarm()
console.log(a);

console.log(x+z+a);

var cadena = "abcdefghij";

console.log("(1,2): "    + cadena.substr(1,2));   // '(1, 2): bc'
console.log("(-3,2): "   + cadena.substr(-3,2));  // '(-3, 2): hi'
console.log("(-3): "     + cadena.substr(-3));    // '(-3): hij'
console.log("(1): "      + cadena.substr(1));     // '(1): bcdefghij'
console.log("(-5, 2): " + cadena.substr(-5,2)); // '(-20, 2): ab'
console.log("(20, 2): "  + cadena.substr(20,2));  // '(20, 2): '
//function initMap() {esto es el mapa de google
  //var lat =19.605;
  //var lng =-99.243333;
  //lat=document.getElementById('uno').value;
  //lng=document.getElementById('dos').value;
   //var uluru = {lat:lat,lng:lng};
   //var uluru = {lat:lat, lng:lng};
   //var map = new google.maps.Map(document.getElementById('map'), {
     //zoom: 80,
     //center: uluru,
   //});
   //var marker = new google.maps.Marker({
     //position: uluru,
    // map: map
   //});
 //}
