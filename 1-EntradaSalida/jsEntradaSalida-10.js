/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarImporte()
{
	let importe;
	let proceso;
	let resultado;

	importe = parseFloat(document.getElementById("txtIdImporte").value);
	proceso = importe * 0.25;
	resultado = importe - proceso;
	document.getElementById("txtIdResultado").value = resultado.toFixed(2);
}
