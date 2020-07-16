/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let medidaRect;
    let alambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    medidaRect = (largo + ancho) * 2;
    alambre = medidaRect *3;

    alert ("La cantidad de alambre a comprar es: " + alambre);
}
function Circulo () 
{
    let radio;
    let diametro;
    let perimetro;
    let alambre;

    radio = parseFloat(document.getElementById("txtIdRadio").value);
    diametro = radio * 2;
    perimetro = diametro * 3.14;
    alambre = perimetro *3;

    alert ("La cantidad de alambre a comprar es: " + alambre);
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let medidaCemento;
    let medidaCal;
    const cemento = 2;
    const cal = 3;


    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    area = largo * ancho;
    medidaCemento = area * cemento;
    medidaCal = area * cal;


    alert ("La cantidad de bolsas de Cal son: " + medidaCal + 
    " y la cantidad de bolsas de Cemento son: " + medidaCemento + " para " + area + " metros cuadrados   ");
	
}