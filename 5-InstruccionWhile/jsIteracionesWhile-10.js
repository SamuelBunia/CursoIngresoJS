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
let sumaPositivos;
let candidadPositivos;
let cantidadNegativos;
let cantidadCeros;
let cantidadPares;
let promedioPositivos;
let promedioNegativos;
let diferencia;
let seguir;

//bucle para que pida numeros hasta que el usuario quiera
do{
	//pido un numero
	numero = parseInt(prompt("Ingrese un numero: "));
	if (numero < 0) {
		sumaNegativos = sumaNegativos + numero;
		document.write(sumaNegativos);
	}


	seguir = prompt("Quiere ingresar otro numero?");
}while(seguir == 'si');







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