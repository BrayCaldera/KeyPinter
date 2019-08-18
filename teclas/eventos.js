var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("areaDeDibujo");
var papelito = cuadrito.getContext("2d");
var x = 150;
var y = 150;

//dibujarLinea(colorcito, x-1, y-1, x+1, y+1, papelito)

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth=3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var colorcito = "#AAF"
    var movimiento = 10;

    switch(evento.keyCode)
    {
        case teclas.DOWN:
            dibujarLinea(colorcito,x,y,x,y+movimiento,papelito);
            y=y+movimiento;
            break;
        case teclas.UP:
            dibujarLinea(colorcito,x,y,x,y-movimiento,papelito);
            y=y-movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito,x,y,x-movimiento,y,papelito);
            x=x-movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito,x,y,x+movimiento,y,papelito);
            x=x+movimiento;
            break;
        default:
            console.log("Otra Tecla");
            break;
    }
}