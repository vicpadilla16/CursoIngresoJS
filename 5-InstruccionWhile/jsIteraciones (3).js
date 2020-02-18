function mostrar()
/*{
var clave = prompt("ingrese el número clave.");
    while (clave.toLowerCase() !="utn750") {
        clave = prompt("ingrese su clave");
    }
alert("bienvenido");
}*///FIN DE LA FUNCIÓN

//para que sean solo 3 intentos:
{
    var clave = prompt("ingrese el número clave.");
    var contador = 0;
        while (clave.toLowerCase() !="utn750") {
            clave = prompt("ingrese su clave");

                contador++;
                if(contador == 2){ 
                break;   
                }
        }
        if (clave.toLowerCase() == "utn750") {
            alert("bienvenido");
            } else {
                alert("intentos máximos");
            }
}