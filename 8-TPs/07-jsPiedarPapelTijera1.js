/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let seleccion;
let numeroMaquina;
const PIEDRA = 1;
const PAPEL = 2;
const TIJERA = 3;

function comenzar()
{
    //Doy la bienvenida al juego
    alert ("Bienvenido al Juego, Elije tu opción");
    //Genero un numero del 1 al 3
    numeroMaquina = Math.round(Math.random() * (3 - 1) ) + 1;

    if (numeroMaquina == PIEDRA) {
        seleccion = "Piedra";
    }else if (numeroMaquina == PAPEL) {
        seleccion = "Papel";
    }else{
        seleccion = "Tijera";
    }

}//FIN DE LA FUNCIÓN


function piedra()
{
	if (numeroMaquina == PIEDRA) {
        alert ("Empate " + seleccion)
    }else if (numeroMaquina == PAPEL) {
        alert ("Perdiste " + seleccion)
    }else{
        alert("Ganaste!! " + seleccion)
    }

}//FIN DE LA FUNCIÓN


function papel()
{
	if (numeroMaquina == PIEDRA) {
        alert ("Ganaste!! " + seleccion)
    }else if (numeroMaquina == PAPEL) {
        alert ("Empate " + seleccion)
    }else{
        alert("Perdiste " + seleccion)
    }
}//FIN DE LA FUNCIÓN


function tijera()
{
	if (numeroMaquina == PIEDRA) {
        alert ("Perdiste " + seleccion)
    }else if (numeroMaquina == PAPEL) {
        alert("Ganaste!! " + seleccion)
    }else{
        alert("Empate " + seleccion)
    }

}//FIN DE LA FUNCIÓN