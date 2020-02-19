function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var iteraciones;

	iteraciones = prompt("cuantos numeros deseas ingresar?");
	iteraciones = parseInt(iteraciones);

	while(isNaN(iteraciones)) {
		iteraciones = prompt("cuantos numros desea ingresaar?");
		iteraciones = parseInt(iteraciones);
	}
	while {
		contador++;
		var numero = prompt("ingrese un numero");

		numero = parseInt(numero);

		while(isNaN(numero)) {
			numero = prompt("error! ingrese un numero");
			numero = parseInt(numero);

		}
		}
		acumulador += numero;
	

	





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}