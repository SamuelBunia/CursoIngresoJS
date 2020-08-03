/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseInt(prompt("Ingrese número: "));
	//isNaN(numero) me dice: no es un numero (numero)?
	while(numero < 0 || numero >  9 || isNaN(numero)){
		alert("Numero Invalido!! Ingrese un numero entre el 0 y 9");
		numero = parseInt(prompt("Ingrese Número: "));
	}
	alert("Correcto!!");
	document.getElementById("txtIdNumero").value = numero;

	
}//FIN DE LA FUNCIÓN