/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos = 0;//necesito una variable donde sume este valor mas 1(contador)
let flag = 0;// variable bandera. Cuando flag sea 1 se hizo algo y cuando sea 0 es por que no

function comenzar(){
	
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.round(Math.random()* 99 + 1);//el 99 es de resto maximo menos minimo
	contadorIntentos = 0;
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
	  switch(contadorIntentos){ 
	  	case contadorIntentos = 1:
			alert ("usted es un Psíquico");
			break;
		case contadorIntentos = 2:
			alert ("excelente percepción");
			break;
		case contadorIntentos = 3:
			alert ("Esto es suerte");
			break;
		case contadorIntentos = 4:
			alert ("Excelente técnica");
			break;
		case contadorIntentos = 5:
			alert("usted está en la media");
			break;
		case contadorIntentos = 6:
		case contadorIntentos = 7:
		case contadorIntentos = 8:
		case contadorIntentos = 9:
		case contadorIntentos = 10:
			alert("falta técnica");
			break;
		default:
			alert("afortunado en el amor!!");
			}   
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