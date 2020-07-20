function mostrar()
{
	let edad;
//tomo la edad declarando la variable y con el parseInt para que pase a contable por si acaso, despues traigo con get

	edad = parseInt(document.getElementById("txtIdEdad").value);
//si la edad es mayor o igual
	if (edad >= 18) {
		
		alert("Usted es mayor de edad");
	}
	//tomo la edad  
	
	

}//FIN DE LA FUNCIÓN