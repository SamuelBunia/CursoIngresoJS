function mostrar()
{
	let destino;
	//como es una cantidad tengo que pasarla a entero y number
	destino = document.getElementById("txtIdDestino").value;
	
	//solo me dice que si esta entre 7 y 11 decir que es de mañana
	switch (destino) {
		case "Ushuaia":
			alert("Su destino se encuentra en el Sur");
			break;

		case "Cataratas":
			alert("Su destino se encuentra en el Norte");
			break;

		case "Bariloche":
			alert("Su destino se encuentra en el Oeste");
			break;

		case "Mar del plata":
			alert("Su destino se encuentra en el Este");
			break;
	}
}//FIN DE LA FUNCIÓN