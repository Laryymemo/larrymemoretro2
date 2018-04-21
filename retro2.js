function inicio_viaje() {
var cordenada1 = "";
cordenada1 = document.getElementById('codenada1').value;
var a1 = cordenada1.substr(0,2)
var b1 = cordenada1.substr(2,2)
var c1 = cordenada1.substr(4,2)
var d1 = cordenada1.substr(6,2)
var e1 = cordenada1.substr(8,2)
var f1 = cordenada1.substr(10,2)
var result = a1+"º"+b1+"'"+c1+'"'+"N"+"+"+d1+"º"+e1+"'"+f1+'"'+"W";
var cordenada2 = "";
cordenada2 = document.getElementById('codenada2').value;
var a2 = cordenada2.substr(0,2)
var b2 = cordenada2.substr(2,2)
var c2 = cordenada2.substr(4,2)
var d2 = cordenada2.substr(6,2)
var e2 = cordenada2.substr(8,2)
var f2 = cordenada2.substr(10,2)
var resultadoco1 = a2+"º"+b2+"'"+c2+'"'+"N"+"+"+d2+"º"+e2+"'"+f2+'"'+"W";
var resultadomaster="www.google.com.mx/maps/dir/"+result+"/"+resultadoco1+"/";
document.getElementById('resultado1').innerHTML=result;
document.getElementById('resultado2').innerHTML=resultadoco1;
document.getElementById('resultadomaster').innerHTML=resultadomaster;
}

function copiarAlPortapapeles(id_elemento) {
var aux = document.createElement("input");
aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
document.body.appendChild(aux);
aux.select();
document.execCommand("copy");
document.body.removeChild(aux);
}

function info() {
var cordenada = "";
cordenada = document.getElementById('info').value;
var a3 = cordenada.substr(0,2)
var b3 = cordenada.substr(2,2)
var c3 = cordenada.substr(4,2)
var d3 = cordenada.substr(6,3)
var e3 = cordenada.substr(9,3)
var distance = "  Distancia Recorrida = "+d3+" km "+"</br>"
var money = "  Importe pagado = "+"$ "+a3+b3+" . "+c3+"</br>"
var time = " Tiempo De Recorrido = "+e3+" min "+"</br>"

document.getElementById('Datos').innerHTML=money+distance+time;

}

function datos() {
var Tax_num = "";
var Choferes = [
["Andres Hernandez Cameras","5491-T","Tsuru-2015"],
["Fernando Fernandez Ferras","3565-T","Versa-2014"],
["Enrique Nieto Peña","2164-T","Prius-2012"],
["Patricio Estrella De Mar","5565-T","Vento-2014"],
["Elias O' Noleias","1254-T","Dodge-2014"],
["Moncerrat Reyna Romero","2136-T","Tsuru-2002"],
["Alfredo Tejedo Pinedo","1245-T","Ferrari-2018"],
["Jose Salinas Diaz","1496-T","Aveo-2015"],
["Felipe Fernandez ferras","3574-T","Sentra-2013"],
["Paquita Cabeza Evil","4835-T","Aveo-2013"]
]
Tax_num = document.getElementById('select1').value;
if (Tax_num == "Tax-01") {
document.getElementById('resultado4').innerHTML="Conductor "+Choferes[0][0]+" numero de concecion "+Choferes[0][1]+" con veiculo "+Choferes[0][2];
}else if (Tax_num == "Tax-02") {
document.getElementById('resultado4').innerHTML="Conductor "+Choferes[1][0]+" numero de concecion "+Choferes[1][1]+" con veiculo "+Choferes[1][2];
}else if (Tax_num == "Tax-03") {
document.getElementById('resultado4').innerHTML="Conductor "+Choferes[2][0]+" numero de concecion "+Choferes[2][1]+" con veiculo "+Choferes[2][2];
}else if (Tax_num == "Tax-04") {
document.getElementById('resultado4').innerHTML="Conductor "+Choferes[3][0]+" numero de concecion "+Choferes[3][1]+" con veiculo "+Choferes[3][2];
}else if (Tax_num == "Tax-05") {
document.getElementById('resultado4').innerHTML="Conductor "+Choferes[4][0]+" numero de concecion "+Choferes[4][1]+" con veiculo "+Choferes[4][2];
}else if (Tax_num == "Tax-06") {
document.getElementById('resultado4').innerHTML="Conductor "+Choferes[5][0]+" numero de concecion "+Choferes[5][1]+" con veiculo "+Choferes[5][2];
}else if (Tax_num == "Tax-07") {
document.getElementById('resultado4').innerHTML="Conductor "+Choferes[6][0]+" numero de concecion "+Choferes[6][1]+" con veiculo "+Choferes[6][2];
}else if (Tax_num == "Tax-08") {
document.getElementById('resultado4').innerHTML="Conductor "+Choferes[7][0]+" numero de concecion "+Choferes[7][1]+" con veiculo "+Choferes[7][2];
}else if (Tax_num == "Tax-09") {
document.getElementById('resultado4').innerHTML="Conductor "+Choferes[8][0]+" numero de concecion "+Choferes[8][1]+" con veiculo "+Choferes[8][2];
}else if (Tax_num == "Tax-10") {
document.getElementById('resultado4').innerHTML="Conductor "+Choferes[9][0]+" numero de concecion "+Choferes[9][1]+" con veiculo "+Choferes[9][2];
}
}
