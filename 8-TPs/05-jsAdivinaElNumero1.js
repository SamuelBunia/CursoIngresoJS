/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

//declaro las variables fuera de las funciones para usar en cualquier funcion
let numeroSecreto; 
let contadorIntentos = 0;//necesito una variable donde sume este valor mas 1(contador)
let flag = 0;// variable bandera. Cuando flag sea 1 se hizo algo y cuando sea 0 es por que no

function comenzar(){

	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.round(Math.random()* 99 + 1);//el 99 es de resto maximo menos minimo
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  document.getElementById("txtIdNumero").focus();
  document.getElementById("txtIdNumero").value = "";
  alert("Listo, ya pensé en un numero.... Trata de adivinarlo");
  //alert (numeroSecreto);
  flag = 1;
}

//se requiere verificar que el usuario primero de comenzar antes de verificar
function verificar()
{
  let numero;
  
  if (flag == 0) {
    alert("Debes presionar primero el boton comenzar");
    
  }else{
    numero = parseInt(document.getElementById("txtIdNumero").value);
    //contadorIntentos = contadorIntentos + 1;
    contadorIntentos++;
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    
    if (numero == numeroSecreto) {
      //si el numero de la maquina es el mismo que ingreso el usuario decir que gano 
      alert("Usted es un ganador y en solo " + contadorIntentos + " Intentos");   
      contadorIntentos = 0;
      flag = 0;//cuando gane vuelve a hacer la bandera en 0 

    }else if (numero > numeroSecreto) {
      //informo que el usuario se paso del numero secreto
      alert("Se paso...");
      
    }else{
      //informo que al usuario le falta por llegar, esta bajo
      alert("Le falta...");
    }
    
    document.getElementById("txtIdNumero").value = "";//con esto limpio el numero que ingrese
    document.getElementById("txtIdNumero").focus();
  }
	
}