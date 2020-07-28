
/*
Enunciado:
3. Piedra, Papel o Tijera (v 2.0):
Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página*/ 

let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;
let seleccion;
let flag = 0;

const PIEDRA = 1;
const PAPEL = 2;
const TIJERA = 3;

function comenzar()
{
    //Doy la bienvenida al juego
    alert ("Elije tu opción");
    //Genero un numero del 1 al 3
    numeroMaquina = Math.round(Math.random() * (3 - 1) ) + 1;

    if (numeroMaquina == PIEDRA) {
        seleccion = "Piedra";
    }else if (numeroMaquina == PAPEL) {
        seleccion = "Papel";
    }else{
        seleccion = "Tijera";
    }
    mostrarResultado();
}//FIN DE LA FUNCIÓN


function piedra()
{
	if (numeroMaquina == PIEDRA) {
		alert ("Empate contra " + seleccion);
		ContadorDeEmpates++;
    }else if (numeroMaquina == PAPEL) {
        alert ("Perdiste con " + seleccion);
        ContadorDePerdidas++;
    }else{
        alert("Ganaste!! contra " + seleccion);
        ContadorDeGanadas++;
    }
    comenzar();
}//FIN DE LA FUNCIÓN


function papel()
{
	if (numeroMaquina == PIEDRA) {
        alert ("Ganaste!! contra " + seleccion);
        ContadorDeGanadas++;
    }else if (numeroMaquina == PAPEL) {
		alert ("Empate con " + seleccion);
		ContadorDeEmpates++;
    }else{
        alert("Perdiste contra " + seleccion);
        ContadorDePerdidas++;
    }
    comenzar();
}//FIN DE LA FUNCIÓN


function tijera()
{
	if (numeroMaquina == PIEDRA) {
        alert ("Perdiste contra " + seleccion);
        ContadorDePerdidas++;
    }else if (numeroMaquina == PAPEL) {
        alert("Ganaste!! contra " + seleccion);
        ContadorDeGanadas++;
    }else{
		alert("Empate con " + seleccion);
		ContadorDeEmpates++;
    }
    comenzar();
}
//REFRESCAR LAS CAJAS DE TEXTO O ACTUALIZA LAS CAJAS
function mostrarResultado()
{
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = ContadorDeEmpates;
	document.getElementById("txtIdEmpatadas").value = ContadorDePerdidas;
}