/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	/*menciono las edades que necesito
	lo que voy a ingresar como dato a la derecha
	y donde lo voy a ingresar a la izquierda*/ 
	let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	/*hacer el alert
	y el alert llevara usted se llama y tiene y año fijo
	el nombre que es una variable y la edad que es una variable fija*/
	//opcion alert (`Usted se llama ${nombre} y tiene ${edad} años`); 

	alert("Usted se llama " + nombre + " y tiene " + edad + " años"); 
}

