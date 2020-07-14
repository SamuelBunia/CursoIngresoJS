/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let proceso;
	let resultado;

	sueldo = parseFloat(document.getElementById("txtIdImporte").value);
	proceso = sueldo * 0.25;
	resultado = sueldo - proceso;
	document.getElementById("txtIdResultado").value = resultado;
}
