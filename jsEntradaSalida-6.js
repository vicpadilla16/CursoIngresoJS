/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numUno;
    var numDos;
    var resultado;
    numUno = document.getElementById("numeroUno").value;
    numDos = document.getElementById("numeroDos").value;
    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
    var resultado = numUno + numDos;
    alert("El resultado es " + resultado + ".");
}

