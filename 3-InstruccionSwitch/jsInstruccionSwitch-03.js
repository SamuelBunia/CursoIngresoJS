function mostrar()
{
	let mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		//puedo hacerlo en el orden de meses o tambien puedo colocar a enero con los otros 
			case "Enero":
				alert("Este mes tiene 30 o más días");
				break;
			case "Febrero":
				alert("Este mes no tiene más de 29 días.");
				break;
			case "Marzo":
			case "Abril":
			case "Mayo":
			case "Junio":
			case "Julio":
			case "Agosto":
			case "Septiembre":
			case "Octubre":
			case "Noviembre":
			case "Diciembre":
				alert("Este mes tiene 30 o más días");
				break;
			
		//en el caso de no haber ingresado a ningun case va al default
			default:
				break;

/*Ejemplo switch(mes){
	case "Febrero":
		alert("Este mes no tiene mas de 29 dias");
		break;
	default: 
		alert ("Este mes tiene 30 o mas dias")
} */
		}




}//FIN DE LA FUNCIÓN