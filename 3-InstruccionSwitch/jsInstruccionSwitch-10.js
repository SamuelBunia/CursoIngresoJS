function mostrar()
{
	//son 3 datos que debo tener en cuenta destino estacion de clima y tarifa
	let destino;
	let estacion;
	
	//el destino es string lo tomo normal igual estacion, tarifa es fija a la cual le hago descuento o aumento
	destino = document.getElementById("txtIdDestino").value;
	estacion= document.getElementById("txtIdEstacion").value;


	//Hago un switch para cada caso  y despues en el caso hago un if else
	switch (estacion){
		case "Invierno":
			if (destino == "Bariloche") {
					alert("Se viaja!!");
			}else{
				alert("No se viaja!!");
			}
		break;

		case "Verano":
			if (destino == "Cataratas" || destino == "Mar del plata") {				
					alert("Se viaja");
			}else{
				alert("No se viaja");
			}
		break;
	
		case "Otoño":
			alert("Se viaja!!");
			break;

		case "Primavera":
			if (destino == "Bariloche") {
					alert("No se viaja");
				}else{
					alert("Se viaja!!");
				}
		break;
			}
/*
switch (estacion){
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("Se viaja!!");
					break;
				default:
					alert("No se viaja");
					break;
			}
		}
	//por cada estacion de clima hago un switch y dentro switch de destinos
	switch (estacion) {
		case "Verano":
			switch (destino) {				
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;
				
				default:
					alert("No se viaja");
					break;
			}
		}
	//por cada estacion de clima hago un switch y dentro switch de destinos
	switch (estacion) {
		case "Otoño":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					alert("Se viaja");
					break;	
				}
			}
	//por cada estacion de clima hago un switch y dentro switch de destinos
	switch (estacion) {
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert("No se viaja");
					break;

				default:
					alert("Se viaja!!");
					break;	
				}
			}
*/ 
}//FIN DE LA FUNCIÓN