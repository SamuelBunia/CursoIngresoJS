function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	//Pregunto si es adulto?
	if (edad >=18) 
	{
		alert ("Usted es mayor de edad");
	//si no es
	}else{
	//pregunto es adolescente?
		if (edad >=13 && edad <=17) {
			alert("Usted es adolescente");
	//y si no es ninguno de los dos me queda que sea niño *Planteo solo 2 preguntas y por ende si no son es la 3ra*
		}else{
			alert ("Usted es un niño")
		}
	}
	/*puede hacerse asi
	if (edad < 13){
		alert("Es un niño");
	}else{
		if (edad > 18){
			alert("Es un adulto");
		}else{
			alert("Es adolescente");
		}
	}
	*/ 
	

}//FIN DE LA FUNCIÓN