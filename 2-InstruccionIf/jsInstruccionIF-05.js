function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	/*EL PROFESOR DIJO QUE NO DEBEMOS DEJAR UN BLOQUE SIN NADA
	if (edad >=13 && edad <=17) 
	{
		//no informo que es adolescente por que solo debo informar que no es adolescente
	}else{
		alert("Usted no es adolescente");
	}*/
	/*u otra forma(Si no es adolescente)
	if (!(edad >=13 && edad <=17)) 
	{
		alert ("No es adolescente");	
	}*/
	 //u otra forma
	if (edad <13 || edad >17) //preguntamos si es menor a 13 o mayor a 17 mostrar que no es adolescente
	{
		alert ("Usted no es adolescente");
	}


}//FIN DE LA FUNCIÓN