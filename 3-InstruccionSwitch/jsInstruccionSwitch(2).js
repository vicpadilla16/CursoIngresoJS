function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch (mesDelAño) {
    case "Julio":
    case "Agosto":
        mensaje = "Abrigate que hace frío"
        break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        mensaje = "falta para el invierno"
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":               
    case "Diciembre":
        mensaje = "ya pasamos el frío, ahora el calor!"
        break;

}
console.log(mesDelAño);
console.log(mensaje);
alert (mesDelAño);
}//FIN DE LA FUNCIÓN