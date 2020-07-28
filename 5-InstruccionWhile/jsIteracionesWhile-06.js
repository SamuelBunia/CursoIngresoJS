function mostrar()
{
	let i = 0;
	let numero;
	let suma = 0;
	let promedio;

	//para pedir el numero 5 veces y a su vez para ir guardando la cifra en la suma
	while (i < 5) {
		//pido el numero
		numero = parseInt(prompt("Ingrese numero: "));
		//guardo el numero mas el otro. lo uso como acumulador
		suma = suma + numero;
		//lo uso como contador de veces que lo hare
		i++;
	}
	
		
	promedio = suma / 5;
	
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
	






	/*
let numero1;
let numero2;
let numero3;
let numero4;
let numero5;
let suma;
let promedio;

numero1 = parseInt(prompt("Ingrese numero"));
numero2 = parseInt(prompt("Ingrese numero"));
numero3 = parseInt(prompt("Ingrese numero"));
numero4 = parseInt(prompt("Ingrese numero"));
numero5 = parseInt(prompt("Ingrese numero"));



suma = numero1 + numero2 + numero3 + numero4 + numero5;
promedio = suma / 5;

document.getElementById("txtIdSuma").value = suma;
document.getElementById("txtIdPromedio").value = promedio;
*/
}//FIN DE LA FUNCIÓN