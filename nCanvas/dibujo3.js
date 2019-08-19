var dibujito = document.getElementById("dibujito3");
var lienzo = dibujito.getContext("2d");
var texto = document.getElementById("lineas");
var botoncito = document.getElementById("boton");
var ancho = dibujito.width;

botoncito.addEventListener("click", dibujarCanvas);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarCanvas() {
    var lineas = parseInt(texto.value);
    var multiplicador = ancho / lineas;
    for (let index = 0; index <= ancho; index += multiplicador) {
        dibujarLinea(getRandomColor(), 0, index, index + multiplicador, ancho);
        dibujarLinea(getRandomColor(), ancho, ancho - index, ancho - (index + multiplicador), 0);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}