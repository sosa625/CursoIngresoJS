/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()

var divisor;
var dividiendo;
var resultado;

dividiendo = document.getElementById("numeroDividiendo").Value;
divisor = document.getElementById("numeroDivisor").Value;

resultado = dividiendo % divisor;

alert("el resto es + resultado");
}
