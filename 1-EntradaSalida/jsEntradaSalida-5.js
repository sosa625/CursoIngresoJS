/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre ;
    var edad;

    nombre = document.getElementById("elNombre").Value;
    edad = document.getElementsById("laEdad").value;

    alert("usted se llama" + nombre + " y tiene " + edad);
}

