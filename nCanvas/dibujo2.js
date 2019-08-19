//alert("Sí funciono");
var d = document.getElementById("dibujito2");
var lienzo = d.getContext("2d");
var colorPincel = "#AAF";
var lineas = 30;
var l = 0;

while(l<lineas)
{
  pincel(colorPincel,0,l*10,l*10,300);
  l=l+1;
}

for(l=0;l<lineas;l++)
{
  pincel(colorPincel,l*10,0,300,l*10);
}

  function pincel(color, xi, yi, xf, yf)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
  }
