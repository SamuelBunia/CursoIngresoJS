
function mostrar()
{
// declaracion de variables
let tipo;
let precio;
let marca;
let cantidad;
let fabricante;
let promedio;
let contadorJabones = 0;
let precioAlcoholBarato;
let cantidadAlcoholBarato;
let fabricanteAlcoholBarato;
let mayorCantidad;
let tipoMayorCantidad;
let precioMayorCantidad;
let flagAcohol = 0;


//generar un bucle que itere 5 veces (for)
//dentro del bucle
	for (let i = 0; i < 5; i++) {
		//pido los datos de cada producto(tipo, cantidad, precio, marca, fabricante)
		tipo = prompt("Ingrese el Tipo de Poducto que es: ");
		precio = parseInt(prompt("Ingrese el precio del producto: "));
		marca = prompt ("Ingrese la marca del producto: ");
		cantidad = parseInt(prompt("Ingrese la cantidad del producto: "));
		fabricante = prompt("Ingrese el fabricante del producto: ");
		alert("Ingreso: " + tipo + " " + precio + " " + marca + " " + cantidad + " " + fabricante);
	}
//validar los datos

//A
//me fijo si el producto es un alcohol
//y si es el primer alcohol o no, y actualizo cantidad, precio y fabricante si es necesario

//B
//tengo que anilizar la mayor cantidad e ir guardando el tipo de producto que tiene esa cantidad, junto con su cantidad y precio
//se puede usar bandera

//C
//analizar si el producto es un jabon y actuar en consecuencia
//contar los jabones



//fuera del bucle
//presentar los informes 
}
