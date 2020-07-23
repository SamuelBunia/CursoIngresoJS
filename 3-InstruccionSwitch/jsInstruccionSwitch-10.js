function mostrar()
{
	//son 3 datos que debo tener en cuenta destino estacion de clima y tarifa
	let destino;
	let estacion;
	
	//el destino es string lo tomo normal igual estacion, tarifa es fija a la cual le hago descuento o aumento
	destino = document.getElementById("txtIdDestino").value;
	estacion= document.getElementById("txtIdEstacion").value;


	//por cada estacion de clima hago un switch y dentro switch de destinos
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

}//FIN DE LA FUNCIÓN