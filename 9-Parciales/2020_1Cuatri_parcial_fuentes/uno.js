
function mostrar()
{
// declaracion de variables
let tipo;
let precio;
let marca;
let cantidad;
let fabricante;
let promedioCompra;
let precioAlcoholBarato;
let cantidadAlcoholBarato;
let fabricanteAlcoholBarato;
let tipoMayorCantidad;

let cantidadAlcohol = 0;
let cantidadJabones = 0;
let cantidadBarbijo = 0;
let acumAlcohol = 0;
let acumBarbijo = 0;
let acumJabon = 0;
let contadorAlcohol = 0;
let contadorBarbijo = 0;
let contadorJabones = 0;
let flagAcohol = 0;


//generar un bucle que itere 5 veces (for)
//dentro del bucle
	for (let i = 0; i < 5; i++) {

		//pido los datos de cada producto(tipo, cantidad, precio, marca, fabricante)
		//pido el producto y de una vez confirmo que sea barbijo alcohol o jabon
		tipo = prompt("Ingrese el Tipo de Poducto que es: ").toLowerCase();
		while (!(tipo == "barbijo" || tipo == "alcohol" || tipo == "jabon")) {
			tipo = prompt("Tipo de producto erroneo. Ingrese Jabon, Alcohol o Barbijo: ").toLowerCase();
		}
		//pido el precio y de una vez confirmo que este entre 100 y 300
		precio = parseFloat(prompt("Ingrese el precio del producto entre (100$ y 300$): "));
		while (!(precio >= 100 && precio <= 300)) {
			precio = parseFloat(prompt("Precio erroneo. Ingrese el precio del producto entre (100$ y 300$): "));
		}
		//pido la cantidad y de una vez confirmo que no sea 0, no sea negativo y no sea mayor a 1000
		cantidad = parseInt(prompt("Ingrese la cantidad del producto: "));
		while (!(cantidad > 0 && cantidad < 1000)) {
			cantidad = parseInt(prompt("Cantidad erronea. Ingrese la cantidad de 1 a 1000: "));
		}
		//pido marca
		marca = prompt ("Ingrese la marca del producto: ");
		//pido fabricante
		fabricante = prompt("Ingrese el fabricante del producto: ");
		
		switch (tipo) {
			case "alcohol":
				acumAlcohol = precio + acumAlcohol;
				cantidadAlcohol = cantidadAlcohol + cantidad;
				contadorAlcohol++;

			if(flagAcohol == 0 || precio < precioAlcoholBarato){
				cantidadAlcoholBarato = cantidad;
				precioAlcoholBarato = precio;
				fabricanteAlcoholBarato = fabricante;
					flagAcohol = 1;
			} 
				break; 
		
			case "barbijo":
				acumBarbijo = precio + acumBarbijo;
				cantidadBarbijo = cantidadBarbijo + cantidad;
				contadorBarbijo++;
				break;
			
			case "jabon":
				acumJabon = precio + acumJabon;
				cantidadJabones = cantidadJabones + cantidad;
				contadorJabones++;
				break;
		}
			
		
	}

//validar los datos
//calculos
if ( cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabones) {
	tipoMayorCantidad = "alcohol";
	promedioCompra = cantidadAlcohol / contadorAlcohol;

}else if ( cantidadBarbijo >= cantidadAlcohol && cantidadBarbijo > cantidadJabones) {
	tipoMayorCantidad = "barbijo";
	promedioCompra = cantidadBarbijo / contadorBarbijo;
}else{
	tipoMayorCantidad = "jabon";
	promedioCompra =  cantidadJabones / contadorJabones;
}


//A
//me fijo si el producto es un alcohol
//y si es el primer alcohol o no, y actualizo cantidad, precio y fabricante si es necesario
	if(flagAcohol == 0){
		alert("A.-No hubo ningun alcohol comprado");
	}else{
		alert("A.- El dato del Alcohol mas barato es: \n" +  
		"Unidades: " + cantidadAlcoholBarato + "\n" + 
		"Fabricante: "+ fabricanteAlcoholBarato + "\n" + 
		"Precio: " + precioAlcoholBarato);
	}

//B
//tengo que anilizar la mayor cantidad e ir guardando el tipo de producto que tiene esa cantidad, junto con su cantidad y precio
//se puede usar bandera

alert("B.- Tipo con mas unidades: " + tipoMayorCantidad + "\n" + 
"Promedio de compra: " + promedioCompra);



//C
//analizar si el producto es un jabon y actuar en consecuencia
//contar los jabones

alert("C.- Cantidad de jabones: " + cantidadJabones);

//fuera del bucle
//presentar los informes 
}
