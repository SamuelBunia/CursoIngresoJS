function mostrar()
{
	let hora;
	//como es una cantidad tengo que pasarla a entero y number
	hora = parseInt(document.getElementById("txtIdHora").value);
	
	//solo me dice que si esta entre 7 y 11 decir que es de mañana
	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:	
			alert("Es de mañana.")	
			break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:	
		case 17:
		case 18:
		case 19:
			alert("Es de tarde.");
			break;

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:	
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:		
			alert("Es de noche.");
			break;
		
		default:
			alert ("La hora no existe");
			break;
	}

}//FIN DE LA FUNCIÓN