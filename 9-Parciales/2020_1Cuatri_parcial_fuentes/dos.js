function mostrar()
{
/* 
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),


*/
//variables
let tipo;
let cantidadBolsas;
let cantidadBolsasTotal;
let precioTotalBruto;
let precioTotalDescuento;
let precioXbolsa;
let seguir;
let descuento;
let precioBrutoCal;
let precioBrutoCemento;
let precioBrutoArena;
let tipoMayorCantidad;
let tipoMasCaro;

let contadorArena = 0;
let contadorCemento = 0;
let contadorCal = 0;
let acumuladorBolsasArena = 0;
let acumuladorBolsasCal = 0;
let acumuladorBolsasCemento = 0;
let flag = 0;

//Ingresar datos hasta que el cliente quiera
do{
//pedir tipo de producto
tipo = prompt("Ingrese el Tipo de Producto (Arena, Cal o Cemento): ").toLowerCase();
while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento")) {
  tipo = prompt("Tipo erroneo!!. Ingrese el Tipo de Producto (Arena, Cal o Cemento): ").toLowerCase();
}
//pedir cantidad de bolsas
cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas a comprar: "));
while (isNaN(cantidadBolsas) || cantidadBolsas <= 0) {
  cantidadBolsas = parseInt(prompt("No es un numero valido !!. Ingrese la cantidad de bolsas a comprar: "));
}
//pedir precio por bolsa
precioXbolsa = parseInt(prompt("Ingrese el precio por bolsa: "));
while (isNaN(precioXbolsa) || precioXbolsa <= 0) {
  precioXbolsa = parseInt(prompt("No es un numero valido !!. Ingrese el precio por bolsa: "));
}
// Clasificar para acumular los precios por tipo y las bolsas por tipo
switch (tipo) {
      case "arena":
        acumuladorBolsasArena = acumuladorBolsasArena + precioXbolsa; 
        contadorArena = contadorArena + cantidadBolsas;
      break;

      case "cal":
          acumuladorBolsasCal = acumuladorBolsasCal + precioXbolsa;
          contadorCal = contadorCal + cantidadBolsas;
      break;
      
      case "cemento":
        acumuladorBolsasCemento = acumuladorBolsasCemento + precioXbolsa;
        contadorCemento = contadorCemento + cantidadBolsas;
      break;
      }
//Preguntar si desea continuar
flag = 1;
seguir = prompt("Desea ingresar otro producto? ");
}while(seguir == 'si');
// cierra los datos pedidos
//cuentas de precios por tipo, bolsas totales, precio totalBruto
precioBrutoArena = acumuladorBolsasArena * contadorArena;
precioBrutoCal = acumuladorBolsasCal * contadorCal;
precioBrutoCemento = acumuladorBolsasCemento * contadorCemento
cantidadBolsasTotal = contadorArena + contadorCal + contadorCemento;
precioTotalBruto = precioBrutoArena + precioBrutoCal + precioBrutoCemento;

//CONDICIONES PARA MOSTRAR
//-------------------------DESCUENTOS--------------------------------------------------
  if (cantidadBolsasTotal > 30) {
    //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
    descuento = 0.25;
    precioTotalDescuento = precioTotalBruto - precioTotalBruto * descuento;

  }else if (cantidadBolsasTotal > 10) {
    //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
    descuento = 0.15;
    precioTotalDescuento = precioTotalBruto - precioTotalBruto * descuento;

  }else{
    descuento = 0;
    precioTotalDescuento = precioTotalBruto;
  }
//------------------------TIPO MAYOR CANTIDAD------------------------------------------------

if ( contadorArena > contadorCemento && contadorArena > contadorCal) {
	tipoMayorCantidad = "Arena";

}else if ( contadorCemento >= contadorArena && contadorCemento > contadorCal) {
  tipoMayorCantidad = "Cemento";
  
}else{
	tipoMayorCantidad = "Cal";
}

//------------------------TIPO MAS CARO-------------------------------------------------
if ( acumuladorBolsasArena > acumuladorBolsasCemento && acumuladorBolsasArena > acumuladorBolsasCal) {
	tipoMasCaro = "Arena";

}else if ( acumuladorBolsasCemento >= acumuladorBolsasArena && acumuladorBolsasCemento > acumuladorBolsasCal) {
  tipoMasCaro = "Cemento";
  
}else{
	tipoMasCaro = "Cal";
}
//----------------------------------------------------------------




//a) El importe total a pagar , bruto sin descuento y...
alert("A.- El importe total a pagar: \n"  
+ "*Sin descuento: " + precioTotalBruto);

//b) el importe total a pagar con descuento(solo si corresponde)
alert("B.- El importe total a pagar: \n"  
+ "*Con descuento: " + precioTotalDescuento);

//C) Informar el tipo con mas cantidad de bolsas.
alert("C.- Tipo con mas cantidad de bolsas: " + tipoMayorCantidad);

//f) El tipo mas caro
alert("D.- El tipo de producto mas caro es: " + tipoMasCaro);

}
