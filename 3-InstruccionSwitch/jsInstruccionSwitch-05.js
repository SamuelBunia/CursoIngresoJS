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
	}

}//FIN DE LA FUNCIÓN