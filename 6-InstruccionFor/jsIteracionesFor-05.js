function mostrar()
{
let numero;



for (; ;) {
	numero = parseInt(prompt("Ingrese un numero: "));
	if(numero == 9){
		alert("Ingreso el numero correcto!!");
		break;
	}
	alert("Numero Incorrecto!!");
}
}//FIN DE LA FUNCIÓN