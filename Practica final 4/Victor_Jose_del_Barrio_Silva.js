addEventListener("DOMContentLoaded",iniciar);


var jugador = new Array;    // se guardaran los clicks del jugador
var maquina = new Array;    // para los clicks de la maquina
var secuencia = new Array;
var opciones = ["verde", "rojo", "amarillo", "azul"];

obj0 = document.getElementById('quesoVerde');
obj1 = document.getElementById('quesoRojo');
obj2 = document.getElementById('quesoAmarillo');
obj3 = document.getElementById('quesoAzul');

var objetos = [obj0,obj1,obj2,obj3];

document.getElementById('quesoVerde').addEventListener("click",()=>{brillar(0)}); 
document.getElementById('quesoRojo').addEventListener("click",()=>{brillar(2)}); 
document.getElementById('quesoAmarillo').addEventListener("click",()=>{brillar(4)}); 
document.getElementById('quesoAzul').addEventListener("click",()=>{brillar(6)}); 

function iniciar(){
    //                 0 verde          1 verde BRI         2 rojo          3 rojo BRI              4 amarillo      5 amarillo BRI          6 azul          7 azul BRI
    var colores = ["rgb(0, 128, 0)","rgb(130, 225, 130)","rgb(255, 0, 0)","rgb(255, 130, 130)","rgb(255, 255, 0)","rgb(255, 255, 130)", "rgb(0, 0, 255)", "rgb( 130, 130, 255)"];
    setTimeout(function() {obj0.style.backgroundColor=(colores[1],tiempoBRI);} // esto esta bien?
    function encender(objetos){ //no se le puede meter un array 
        var brilla;
        // 
        setTimeout(function () {
            for(i in maquina){
                var tiempoBRI = i * 800
                var tiempoAPA = tiempoBRI + 600; 
                brilla = maquina[i];
                if(brilla == obj0){                    
                    setTimeout(function() {obj0.style.backgroundColor=(colores[1],tiempoBRI)};
                    setTimeout(function() {obj0.style.backgroundColor=(colores[0],tiempoAPA)};
                }		
                else if(brilla == obj1){
                    setTimeout(function() {obj0.style.backgroundColor=(colores[3],tiempoBRI)};
                    setTimeout(function() {obj0.style.backgroundColor=(colores[2],tiempoAPA)};
                }
                else if(brilla == obj2){
                    setTimeout(function() {obj0.style.backgroundColor=(colores[5],tiempoBRI)};
                    setTimeout(function() {obj0.style.backgroundColor=(colores[4],tiempoAPA)};
                }
                else if(brilla == obj3){                	
                    setTimeout(function() {obj0.style.backgroundColor=(colores[7],tiempoBRI)};
                    setTimeout(function() {obj0.style.backgroundColor=(colores[6],tiempoAPA)};
                }
                }
            }, 1500);
           
        
        

    }
    obj = document.getElementById('quesoVerde');
                // obj.style.backgroundColor = (obj.style.backgroundColor == 'rgb(0, 128, 0)') ? 'none' : 'rgb(130, 225, 130)';
    maquina.push(secuencia());  // array donde se va acumulando la secuencia de la maquina
    
    function secuencia(){
	var color =  random(0,3);
	var secuencia = colores[color];
	return secuencia;
    }

    // genera el numero aleatorio para decidir el quesito que brilla
    function random(min,max){
	var numero = Math.floor(Math.random()*(max - min + 1) + min);
	return numero;
    }

    
}
function myFunction() {
    document.getElementById("quesoVerde").style.backgroundColor = "rgb(255, 130, 130)";
  }

