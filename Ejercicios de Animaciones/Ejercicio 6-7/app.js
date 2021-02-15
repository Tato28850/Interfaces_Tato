function main(){

var numPx = document.getElementById("mov").value;
var block = document.getElementsByClassName("block");

function botonL(){
    var valor = block.style.left.value;
    block.style.left = valor + numPx;
    
}
document.addEventListener("rigt");












//alert(numPx);
//console.log(numPx);


}
document.addEventListener("DOMContentLoaded", main);