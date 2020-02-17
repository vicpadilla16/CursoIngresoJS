/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() 
{
    var numImporte;
    var resultado;
    numImporte = document.getElementById("importe").value;
    numImporte = parseInt("importe");
    resultado = importe - [(25 * importe) / 100];
    resultado = parseInt("resultado");
    document.getElementById("resultado").value = resultado;
    alert("el resultado es "+ resultado + ".");
}
