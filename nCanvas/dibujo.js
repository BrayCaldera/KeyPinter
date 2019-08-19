//alert("Sí funciono");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

//Labio superior, Izquierda.
pincel("red", 54, 150, 55, 146);
pincel("red", 55, 146, 70 ,128);
pincel("red", 70, 128, 90, 110);
pincel("red", 90, 110, 120, 100);
pincel("red", 120, 100, 130, 101);
pincel("red", 130, 101, 140, 106);
pincel("red", 140, 106, 146, 110);
pincel("red", 146, 110, 150, 112);

//Labio superior, Derecha.
pincel("red", 300-54, 150, 300-55, 146);
pincel("red", 300-55, 146, 300-70 ,128);
pincel("red", 300-70, 128, 300-90, 110);
pincel("red", 300-90, 110, 300-120, 100);
pincel("red", 300-120, 100, 300-130, 101);
pincel("red", 300-130, 101, 300-140, 106);
pincel("red", 300-140, 106, 300-146, 110);
pincel("red", 300-146, 110, 300-150, 112);

//Labio inferior, Izquierda.
pincel("red", 54, 150, 55, 154);
pincel("red", 55, 154, 70, 172);
pincel("red", 70, 172, 90, 190);
pincel("red", 90, 190, 120, 200);
pincel("red", 120, 200, 150, 204);

//Labio inferior, Derecha.
pincel("red", 300-54, 150, 300-55, 154);
pincel("red", 300-55, 154, 300-70, 172);
pincel("red", 300-70, 172, 300-90, 190);
pincel("red", 300-90, 190, 300-120, 200);
pincel("red", 300-120, 200, 300-150, 204);

//Labio interior Up.Izq.
pincel("red", 54, 150, 110, 148);
pincel("red", 105, 148, 114, 149);
pincel("red", 114, 149, 116, 148);
pincel("red", 116, 148, 122, 146);
pincel("red", 122, 146, 142, 151);
pincel("red", 142, 151, 150, 152);

//Labio interior Up.Der.
pincel("red", 300-54, 150, 300-110, 148);
pincel("red", 300-105, 148, 300-114, 149);
pincel("red", 300-114, 149, 300-116, 148);
pincel("red", 300-116, 148, 300-122, 146);
pincel("red", 300-122, 146, 300-142, 151);
pincel("red", 300-142, 151, 300-150, 152);

//Labio interior Down.Der.
pincel("red", 54, 150, 110, 152);
pincel("red", 110, 152, 140, 158);
pincel("red", 140, 158, 150, 156);

//Labio interior Down.Izq.
pincel("red", 300-54, 150, 300-110, 152);
pincel("red", 300-110, 152, 300-140, 158);
pincel("red", 300-140, 158, 300-150, 156);

  function pincel(color, xi, yi, xf, yf)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
  }
