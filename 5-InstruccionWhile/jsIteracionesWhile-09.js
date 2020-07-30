/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let maximo;
	let minimo;
	let seguir;
	let flag = 0;

	do{
		//pido el numero
		numero = parseInt(prompt("Ingrese el numero: "));
		//tengo que averiguar si es la primera iteracion
		if(flag == 0){
			//si es la primera iteracion inicializo el max o min con ese numero	
				maximo = numero;
				minimo = numero;
				flag = 1;
		}else{

			//hay que comparar contra el max anterio y el min anterior	
			if (numero > maximo) {
				maximo = numero;
			}else if (numero < minimo){
				minimo = numero;
			}
		}
		//siempre pregunta si quiere ingresar otro numero 	
		seguir = prompt("Quiere ingresar otro numero? ");
	}while(seguir == 'si');


			document.getElementById("txtIdMaximo").value = maximo;
			document.getElementById("txtIdMinimo").value = minimo;
	


}//FIN DE LA FUNCIÓN