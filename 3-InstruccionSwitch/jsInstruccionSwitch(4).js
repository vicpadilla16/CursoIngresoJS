function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        mensaje = "este mes tiene 31 días.";
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        mensaje = "este mes tiene 30 días.";
        break;
    case "Febrero":
        mensaje = "este mes tiene 28 o 29 días.";
        break;
    }

    console.log(mesDelAño);
    console.log(mensaje);
    alert(mesDelAño + ": " + mensaje);
	
	



}//FIN DE LA FUNCIÓN