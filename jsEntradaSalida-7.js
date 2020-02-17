/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var resultado;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resultado = num1 + num2;
    alert("La suma de " + num1 + " y " + num2 + " es de " + resultado + ".");
}

function restar()
{
	var num1;
    var num2;
    var resultado;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resultado = num1 - num2;
    alert("La resta de " + num1 + " y " + num2 + " es de " + resultado + ".");
}

function multiplicar()
{ 
	var num1;
    var num2;
    var resultado;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resultado = num1 * num2;
    alert("La multiplicación de " + num1 + " y " + num2 + " es de " + resultado + ".");
}

function dividir()
{
	var num1;
    var num2;
    var resultado;
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resultado = num1 / num2;
    alert("La división de " + num1 + " y " + num2 + " es de " + resultado + ".");
}

