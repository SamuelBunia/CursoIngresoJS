function mostrar()
{
	//son 3 datos que debo tener en cuenta destino estacion de clima y tarifa
	let destino;
	let estacion;
	const TARIFA = 15000;
	let aumento;
	let descuento;
	let precioFinal;
	//el destino es string lo tomo normal igual estacion, tarifa es fija a la cual le hago descuento o aumento
	destino = document.getElementById("txtIdDestino").value;
	estacion= document.getElementById("txtIdEstacion").value;
/*Un caso para cada estacion y termina con su break. y e¿dentro de esos casos un caso de destinos
el precio final sera la tarifa con su cuenta de el aumento o descuento declarado en cada caso*/
 
switch (estacion) {
//INVIERNO
	case "Invierno":
		switch (destino) {
			case "Bariloche":
				aumento = 20;
				precioFinal = TARIFA + TARIFA * aumento / 100;
				break;

			case "Cataratas":
			case "Cordoba":
				descuento = 10;
				precioFinal = TARIFA - TARIFA * descuento / 100;
				break;

			case "Mar del plata":
				descuento = 20;
				precioFinal = TARIFA - TARIFA * descuento / 100;
				break;
			}
	break;

//VERANO	
	case"Verano":
		switch (destino) {
			case "Bariloche":
				descuento = 20;
				precioFinal = TARIFA - TARIFA * descuento / 100;
				break;
				
			case "Cataratas":
			case "Cordoba":
				aumento = 10;
				precioFinal = TARIFA + TARIFA * aumento / 100;
				break;

			case "Mar del plata":
				aumento = 20;
				precioFinal = TARIFA + TARIFA * aumento / 100;
				break;
			}
	break;

//OTOÑO PRIMAVERA
	case"Otoño":
	case"Primavera":
		switch (destino) {
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
				aumento = 10;
				precioFinal = TARIFA + TARIFA * aumento / 100;
				break;
									
			case "Cordoba":
				precioFinal = TARIFA;
				break;
				
				
		}
	break;
}
alert ("Su precio final es: $" + precioFinal);
	

	
}//FIN DE LA FUNCIÓN