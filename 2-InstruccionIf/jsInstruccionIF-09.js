function mostrar()
{
	let maximo = 10;
	let minimo = 1;
	let numeroAleatoreo;
	
	numeroAleatoreo = Math.round(Math.random() * (maximo - minimo) + minimo);
	
	alert(numeroAleatoreo);

}//FIN DE LA FUNCIÓN