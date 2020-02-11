function mostrar()
{
//tomo la edad  
    var edad = document.getElementById("edad").value;

    if(edad >= 18) {
        alert("usted es mayor. congrats"); 
    } else {
        alert("usted es menor. danger danger! get out");
    }
}//FIN DE LA FUNCIÓN