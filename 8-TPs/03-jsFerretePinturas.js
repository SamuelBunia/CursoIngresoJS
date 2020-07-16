/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let gradosC;
    

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    gradosC = (temperatura - 32) / 1.8;

    alert("Los grados Farenheit a Centígrados son: " + gradosC.toFixed(2));
	
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let gradosF;
    
    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    gradosF = (temperatura * 1.8) + 32;
    	
    alert("Los grados Centígrados a Farenheit son: " + gradosF.toFixed(2));
}
