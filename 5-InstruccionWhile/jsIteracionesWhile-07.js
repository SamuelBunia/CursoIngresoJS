/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let suma = 0;
	let seguir = 'si';
	let contador = 0;
	let promedio;


	while (seguir == 'si') {
		numero = parseInt(prompt("Ingrese el numero"));
		seguir = prompt("Quiere seguir sumando? ");
		suma = suma + numero;
		contador++;
	}

	promedio = suma / contador;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN