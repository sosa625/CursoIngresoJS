/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numerouno;
var numerodos;

numero1= document.getElementById("numerouno").value;
numero2=document.getElementById("numerodos").value;

numero1 = parseInt("numero1");
numero2 = parseInt("numero2");

resultado = numero1 + numero2

alert("la suma es " + resultado);
}

