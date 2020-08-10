function mostrar()
{
//	En el ingreso a un viaje en avion nos solicitan nombre , 
//	edad, 
//	sexo("f" o "m") 
//	y estado civil("soltero", "casado" o "viudo")
//	y temperatura corporal.
	
//variables	
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let nombreMasTemperatura;
	let promedio;
	let seguir;
	
	
	let solteros = 0;
	let acumHombreSolteros = 0;
	let personasMayores = 0;
	let hombresSolos = 0; 
	let mayoresViudos = 0;
	let maximaTemperatura = 0;
	let flagTemperatura = 0;
	
	
	//inicia el bucle pidiendo datos
	do{ 
		//pido nombre
		nombre = prompt("Ingrese su nombre: ").toLowerCase();
			while (!(isNaN(nombre))) {
			nombre = prompt("Invalido!! Ingrese su nombre: ").toLowerCase();
			}
		//pido edad
		edad = parseInt(prompt("Ingrese su edad: ")); 
			while (isNaN(edad) || edad < 0 || edad > 110) {
			edad = parseInt(prompt("Edad incorrecta. Ingrese su edad (0-100): "));
			}
		//pido sexo
		sexo = prompt("Ingrese sexo (m o f): ").toLowerCase();
			while (sexo != 'm' && sexo != 'f') {
			sexo = prompt("Sexo incorrecto. Ingrese sexo (m o f): ").toLowerCase();
			}
		//pido estado civil
		estadoCivil = prompt("Ingrese su estado civil (Soltero, Casado o Viudo): ").toLowerCase();
			while (estadoCivil != 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo') {
			estadoCivil = prompt("Incorrecto. Ingrese su estado civil (Soltero, Casado o Viudo): ").toLowerCase();
			}
		//pido temperatura
		temperatura = parseFloat(prompt("Ingrese su temperatura corporal en °C: "));
			while (isNaN(temperatura)) {
			temperatura = parseFloat(prompt("Incorrecto. Ingrese su temperatura corporal en °C: "));
			}

		//Persona con mas temperatura
			if (flagTemperatura = 0 || temperatura > maximaTemperatura) {
				maximaTemperatura = temperatura;
				nombreMasTemperatura = nombre;
				flagTemperatura = 1;
			}	
			
		//Cuantos mayores de edad estan viudos
			if (edad >= 18 && estadoCivil == 'viudo') {
				mayoresViudos++;
			}
		//Hombre solteros o viudos
			if (sexo == 'm') {
				if(estadoCivil == 'soltero' || estadoCivil == 'viudo'){
					hombresSolos++;
				}
			}
		//Personas mayores con fiebre
			if (edad > 60 && temperatura > 38) {
				personasMayores++;
			}
		//Promedios de hombres solteros
			if (sexo == 'm' && estadoCivil == 'soltero') {
				acumHombreSolteros = acumHombreSolteros + edad;
				solteros++;
			}
		seguir = prompt("Desea ingresar otra persona?: ");
	}while (seguir == 'si');

//condiciones fuera del bucle	
	promedio = acumHombreSolteros / solteros;	
	
//	a) El nombre de la persona con mas temperatura.
alert("A.- El nombre de la persona con mas temperatura es: \n"
+ nombreMasTemperatura);

//	b) Cuantos mayores de edad estan viudos
alert("B.- La cantidad de mayores de edad que estan viudos es: \n"
+ mayoresViudos);

//	c) La cantidad de hombres que hay solteros o viudos.
alert("C.- La cantidad de hombres solteros o viudos es: \n"
+ hombresSolos);

//	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
alert("D.- La cantidad de personas de 3ra edad que tienen mas de 38° de temperatura es: \n"
+ personasMayores);

//	e) El promedio de edad entre los hombres solteros.
alert("El promedio de edades entre los hombres solteros es: \n"
+ promedio);

}
