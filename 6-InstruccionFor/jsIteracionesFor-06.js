/*al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.
*/


function mostrar()
{
let numero;
let contadorPares = 0;

//Pido un numero
numero = parseInt(prompt("Ingrese un numero cualquiera: "));

//deberia hacer que una variable tome los valor desde 1 al numero ingresado
for (let i = 1; i <= numero; i++) {
		if (i % 2 == 0) {
			alert(i);
			contadorPares++;
		}	
	
	}
alert("La cantidad de numeros pares es: " + contadorPares);
}//FIN DE LA FUNCIÓN