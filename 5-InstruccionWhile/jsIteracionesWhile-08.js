/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	//declarar variable
	let numero;
	let suma = 0;
	let multiplicación = 1;
	let seguir;
	let flag = 0;// hago un flag para saber si el usuario paso por los negativos y si paso cambio valor

	//generar un bucle para que la veces que usuario quiera pedir numeros (do while)
	do{	
	//------------------------------------------------
	//pido numeros
	numero = parseInt(prompt("Ingrese el numero: "));
	//analizar el signo(+-) y acumulo donde corresponda
		if (numero >= 0) {
			suma = suma + numero;
		}else{
			flag = 1;
			multiplicación = multiplicación * numero;	
		}
		
	seguir = prompt("Quiere ingresar otro numero? ");

	}while(seguir == 'si');
	//-------------------------------------------------

	//mostrar los resultados
	if (flag == 0) {
		multiplicación = 0;
	}

	document.getElementById("txtIdSuma").value = suma;
	//fijarme si el usuario no ingreso ningun negativo cambiar su valor a 0
	document.getElementById("txtIdProducto").value = multiplicación;

	
}//FIN DE LA FUNCIÓN