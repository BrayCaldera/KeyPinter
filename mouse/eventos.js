 document.addEventListener("mousedown", mouseEntra);
 document.addEventListener("mouseup", mouseSale);
var cuadrito = document.getElementById("areaDeDibujo");
var papelito = cuadrito.getContext("2d");
var x = 150;
var y = 150;

//dibujarLinea("blue", x-1, y-1, x+1, y+1, papelito)

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth=6;
    lienzo.moveTo(xInicial-10, yInicial-90);
    lienzo.lineTo(xFinal-10, yFinal-90);
    lienzo.stroke();
    lienzo.closePath();
}

function mouseEntra(evento)
{
    console.log("Adentro");
    console.log(evento.screenX + " en X");
    console.log(evento.screenY + " en Y");
    document.addEventListener("mousemove", mouseMueve);
}

function mouseSale(evento)
{
    console.log("Afuera")
    console.log(evento.screenX + " en X");
    console.log(evento.screenY + " en Y");
    document.removeEventListener("mousemove", mouseMueve);
}

function mouseMueve(evento)
{
    console.log("Mueve")
    console.log(evento.screenX + " en X");
    console.log(evento.screenY + " en Y");
    dibujarLinea("blue", evento.screenX,evento.screenY, evento.screenX+1,evento.screenY+1,papelito);
}