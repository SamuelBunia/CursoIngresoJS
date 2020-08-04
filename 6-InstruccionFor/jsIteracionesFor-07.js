/*al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados. 
*/

function mostrar()
{
//variables
let numero;
let contadorDivisores = 0;

//pedir un numero
numero = parseInt(prompt("Ingrese un numero cualquiera: "));

//contar del 1 al numero ingresado
for (let i = 1; i <= numero; i++) {
	if(numero % i == 0){
		alert(i);
		contadorDivisores++;
	}
}

//mostrar los numeros divisores
alert("La cantidad de divisores encontrados son: " + contadorDivisores);

}//FIN DE LA FUNCIÓN