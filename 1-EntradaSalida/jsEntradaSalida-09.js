/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo;
	let proceso;
	let resultado;

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	proceso = sueldo * 0.1;
	resultado = sueldo + proceso;
	document.getElementById("txtIdResultado").value = resultado;

	
}
