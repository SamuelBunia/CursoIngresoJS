/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("ingrese f ó m .");
	// cuando sea distinto a f o m, pero tambien puedo colocarlos en mayuscula M o F
	// Otra es cualquier cosa que ingrese paso todo a mayuscula o miniscula sexo = sexo.toLowerCase
	while (!(sexo == "f" || sexo == "m" || sexo == "F" || sexo == "M")) {
		alert("Sexo Invalido!! Ingrese 'f' para femenino y 'm' para masculino: ");
		sexo = prompt("ingrese f ó m .");
	}
	alert("Correcto!!");
	document.getElementById("txtIdSexo").value = sexo;


	
}//FIN DE LA FUNCIÓN