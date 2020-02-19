function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var maximo;
	var minimo;
	var primeraVez = true;

	while(respuesta!='no')
	{
		var numero = prompt("ingrese numero");
		numero = parseInt(numero);

		while (isNan(numero)) {
		numero = prompt("ingrese un num");
		numero = parseInt(numero);
		}
		
		if (primeraVez) {
			primeraVez = false;

			maximo = numero;
			minimo = numero;

			} else { 

				if (numero > maximo) {
					maximo = numero;
				}

				if (numero < minimo) {
					minimo = numero;
				}
			}
	}
	respuesta = prompt("desea continuar?");
}
	
	/*if (numero > maximo) {
		maximo = numero
	}

	if (numero < minimo) {
		minimo = numero
	}
	}
	respuesta = prompt("desea continuar?");



FIN DE LA FUNCIÓN*/