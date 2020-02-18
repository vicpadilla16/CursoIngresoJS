/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numSueldo;
    var numResultado;
    numSueldo = document.getElementById("sueldo").value;
    numSueldo = parseInt(numSueldo);
    numResultado = (numSueldo * 110) / 100;
    numResultado = parseInt(numResultado);
    document.getElementById("resultado").value = numResultado;

	
}
