function mostrar()
{
//tomo el mes

let mes;
	
	
mes = document.getElementById("txtIdMes").value;

/* if(mes == "Enero" || mes == "Febrero" || mes == "Marzo" || mes == "Abril" 
|| mes == "Mayo" || && mes == "Junio"){
	alert ("Falta para el invierno");
	}else if(mes == "Julio" || mes == "Agosto"){
		alert("Abrigate que hace frio");
	}else{
		alert ("Ya paso el frio, ahora el calor!!");
	}
	*/ 

switch (mes) {
/*Cuando son varios case y no hay diferencia puedo pegarlos con los case
y solo cuando no siga la sesion hago el break*/
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert("Falta para el invierno.");
		break;

	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio.");
		break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!!.");
		break;
	

	default:
		break;
}
}//FIN DE LA FUNCIÓN