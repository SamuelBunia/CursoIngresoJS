function mostrar()
{

	let nota;
	//en vez de colocar el minimo y maximo simplifico y saco la resta de una vez del ejer 9
	nota = Math.round(Math.random() * 9 + 1);
	if (nota >= 9) {
		
		alert(nota + " EXCELENTE");
	}else if (nota > 4) {
		alert(nota + " APROBÓ")
	}else{
		alert(nota + " Vamos, la proxima se puede")
	}

}//FIN DE LA FUNCIÓN