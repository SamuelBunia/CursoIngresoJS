function mostrar()
{

	//las variables que necesito edad y estado
	let edad;
	let estado;
	//llamo las dos variables una con parseInt por que es un numero y el otro solo el string
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;
	//si edad es mayor de 18 y estado es soltero con "" por que es string
	if (edad >= 18 && estado == "Soltero") {
		
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN