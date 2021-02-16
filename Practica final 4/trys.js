addEventListener("DOMContentLoaded",iniciar);

Verde = document.getElementById('Verde');
Rojo = document.getElementById('Rojo');
Amarillo = document.getElementById('Amarillo');
Azul = document.getElementById('Azul');   

function brillar() {
    //                 0 verde          1 verde BRI         2 rojo          3 rojo BRI              4 amarillo      5 amarillo BRI          6 azul          7 azul BRI
    var colores = ["rgb(0, 128, 0)","rgb(130, 225, 130)","rgb(255, 0, 0)","rgb(255, 130, 130)","rgb(255, 255, 0)","rgb(255, 255, 130)", "rgb(0, 0, 255)", "rgb( 130, 130, 255)"];
    if(Verde){
         document.getElementById("Verde").style.backgroundColor = colores[1];
    }
    else if(Rojo){
       document.getElementById("Rojo").style.backgroundColor = colores[3]; 
    }
    else if(Rojo){
        document.getElementById("Amarillo").style.backgroundColor = colores[5]; 
     }
     else if(Rojo){
        document.getElementById("Azul").style.backgroundColor = colores[7];
     }
    
    
  }