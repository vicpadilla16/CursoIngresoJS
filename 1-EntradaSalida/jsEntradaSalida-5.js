/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    var txt1;
    var txtEntero;
    txt1 = "Usted se llama "
    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;
    txt1 = "Usted se llama "
    txtEntero = txt1 + nombre + " y su edad es de " + edad + " años."
    alert(txtEntero);
}

