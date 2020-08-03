/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("Ingrese clave: ");

	while(claveIngresada != "utn750"){
		alert("Clave invalida!!");
		claveIngresada = prompt("Ingrese clave: ");
	}
	alert("Bienvenido!!");

}//FIN DE LA FUNCIÓN
