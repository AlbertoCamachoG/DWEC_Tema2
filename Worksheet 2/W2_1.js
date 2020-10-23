console.log(Math.random());
console.log(Math.random()*(100)+100);
do{
var maximo=(parseInt(prompt("Introduce el valor maximo")));
var minimo=(parseInt(prompt("Introduce el valor minimo")));
if (maximo<minimo)
	alert("El maximo tiene que ser mas grande que el minimo");
}while(maximo<minimo)
document.write(Math.random()*(maximo-minimo)+minimo);
//w2 1,5,7,8
//w3 1,2,7,9