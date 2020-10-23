function getString(){
	var cadena=(prompt("Introduce tu cadena"));
	return cadena;
}
function isPalin(string){
	var cadena=string;
	var x=cadena.length-1;
	var contador=0;
	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
	let variosBlancos = /[ ]+/g;
	cadena = cadena.replace (primerBlanco,"");
	cadena = cadena.replace (ultimoBlanco,"");
	cadena = cadena.replace (variosBlancos," ");
	tempSplit=cadena.split(" ");
	contador=tempSplit.length;
	return(contador);
}