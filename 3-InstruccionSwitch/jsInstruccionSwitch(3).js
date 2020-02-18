function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Febrero":
        mensaje = "este mes no tiene más de 29 días";
        break;
    default:
        mensaje = "este mes tiene 30 días o más";
        break;
    }
    
console.log(mesDelAño);
console.log(mensaje);
alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN