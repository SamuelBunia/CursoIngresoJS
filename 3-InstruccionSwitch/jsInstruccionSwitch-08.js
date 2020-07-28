function mostrar()
{
	let destino;
	
	destino = document.getElementById("txtIdDestino").value;
	
	/*if (destino == "Bariloche" || destino == "Ushuaia") {
		alert ("Hace frio");
	}else{
		alert ("Hace calor");
	}
	*/

	//Hay dos lugares calientes y dos frios
	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			alert("Este es un lugar donde hace FRIO ");
			break;

		case "Cataratas":
		case "Mar del plata":
			alert("Este es un lugar donde hace CALOR");
			break;
	}
}//FIN DE LA FUNCIÓN