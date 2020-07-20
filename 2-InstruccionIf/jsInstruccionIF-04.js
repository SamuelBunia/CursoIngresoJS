function mostrar()
{
	
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	/*Para hacer un limitante puedo hacer un if de un lado
	y dentro de ese if hacer otro limitante
	if (edad >=13) 
	{
		if(edad <=17)
		alert("Usted es un adolescente");
	}
	*/
	//el && me permite unir o conectar mas de una condición
	if (edad >=13 && edad <=17) 
	{
		
		alert("Usted es un adolescente");
	}

//tomo la edad  
}//FIN DE LA FUNCIÓN