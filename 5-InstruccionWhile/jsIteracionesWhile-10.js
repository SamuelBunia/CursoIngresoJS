/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
//variables
let numero;
let sumaNegativos = 0;
let sumaPositivos = 0;
let cantidadPositivos = 0;
let cantidadNegativos = 0;
let cantidadCeros = 0;
let cantidadPares = 0;
let promedioPositivos = 0;
let promedioNegativos = 0;
let diferencia;
let seguir;

//bucle para que pida numeros hasta que el usuario quiera
do{
	//pido un numero
	numero = parseInt(prompt("Ingrese un numero: "));

	//me fijo el sigo del numero + - o cero y sumo y cuento
	if (numero < 0) {
		sumaNegativos = sumaNegativos + numero;
		cantidadNegativos++;
		
	}else if(numero > 0){
		sumaPositivos = sumaPositivos + numero;
		cantidadPositivos++;
		
	}else{
		cantidadCeros++;
	}
	
	//si el numero que el usuario ingreso es par, contar los pares que ingrese 
	if(numero % 2 == 0){
		cantidadPares++;
	}
	
	
	seguir = prompt("Quiere ingresar otro numero?");
}while(seguir == 'si');


//para ver si el usuario no ingreso nada en positivos o negativos
if (cantidadNegativos != 0) {
	promedioNegativos = sumaNegativos / cantidadNegativos;
}

if (cantidadPositivos != 0) {
	promedioPositivos = sumaPositivos / cantidadPositivos;
}

diferencia = cantidadNegativos - cantidadPositivos;

//mostrar informacion
document.write("La suma de numeros positivos es: " + sumaPositivos + "</br>");
document.write("La suma de numeros negativos es: " +sumaNegativos + "</br>");
document.write("La cantidad de numeros negativos es: " + cantidadNegativos + "</br>");
document.write("La cantidad de numeros positivos es: " + cantidadPositivos + "</br>");
document.write("La cantidad de ceros es: " + cantidadCeros + "</br>");
document.write("La cantidad de numeros pares es: " + cantidadPares + "</br>");
document.write("El promedio de numeros positivos es: " + promedioPositivos + "</br>");
document.write("El promedio de numeros negativos es: " + promedioNegativos + "</br>");
document.write("El diferencia de numeros negativos y numeros positivos es: " + diferencia + "</br>");




//acumuladores, contadores, si es par uso el % 2
	
	//Escribir los resultador en document.write
	/*document.write("la Suma de negativos es :"+sumaNegativos);
	document.write("la Suma de positivos es :"+sumaNegativos);
	document.write("la Cantidad de positivos es :"+sumaNegativos);
	document.write("la Cantidad de negativos es :"+sumaNegativos);
	document.write("la Cantidad de ceros es :"+sumaNegativos);
	document.write("la Cantidad de números pares es :"+sumaNegativos);
	document.write("el Promedio de positivos es :"+sumaNegativos);
	document.write("el Promedios de negativos es :"+sumaNegativos);
	document.write("la Diferencia entre positivos y negativos es :"+sumaNegativos);*/
}//FIN DE LA FUNCIÓN