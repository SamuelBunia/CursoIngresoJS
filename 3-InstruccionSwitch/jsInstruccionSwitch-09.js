function mostrar()
{
	//son 3 datos que debo tener en cuenta destino estacion de clima y tarifa
	let destino;
	let estacion;
	let tarifa;
	//el destino es string lo tomo normal igual estacion, tarifa es fija a la cual le hago descuento o aumento
	destino = document.getElementById("txtIdDestino").value;
	estacion= document.getElementById("txtIdEstacion").value;
	tarifa = 15000;

	//por cada estacion de clima hago un switch y dentro switch de destinos
	switch (estacion){
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("Su costo por estadia es: $" + (tarifa * 1.20));
					break;
				
				case "Cataratas":
				case "Cordoba":
					alert("Su costo por estadia es: $" + (tarifa - (tarifa * 0.10)));
					break;
				
				case "Mar del plata":
					alert("Su costo por estadia es: $" + (tarifa - (tarifa * 0.20)));
					break;
			}
		}
	//por cada estacion de clima hago un switch y dentro switch de destinos
	switch (estacion) {
		case "Verano":
			switch (destino) {
				case "Bariloche":
					alert("Su costo por estadia es: $" + (tarifa - (tarifa * 0.20)));
					break;
				
				case "Cataratas":
				case "Cordoba":
					alert("Su costo por estadia es: $" + (tarifa * 1.10));
					break;
				
				case "Mar del plata":
					alert("Su costo por estadia es: $" + (tarifa * 1.20));
					break;
			}
		}
	//por cada estacion de clima hago un switch y dentro switch de destinos
	switch (estacion) {
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					alert("Su costo por estadia es: $" + (tarifa * 1.10));
					break;
					
				case "Cordoba":
					alert("Su costo por estadia es: $" + tarifa);
					break;
				}
			}
			
}//FIN DE LA FUNCIÓN