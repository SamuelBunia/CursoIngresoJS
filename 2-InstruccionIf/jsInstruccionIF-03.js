function mostrar()
{

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
	//si es mayor o igual mostrarlo 
		alert("Usted es mayor de edad");
	}else{
	//si no es mayor de edad mostrarlo
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN