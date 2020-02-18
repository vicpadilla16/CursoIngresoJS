function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch (laHora) {
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
        mensaje = "es de mañana.";
        break;
    default:
        mensaje = "no es de mañana";
        break;
    }
console.log(laHora);
console.log(mensaje);
alert("Son las " + laHora + ", entonces " + mensaje);
	
	



}//FIN DE LA FUNCIÓN