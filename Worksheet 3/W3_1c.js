function getString(){
	var string=(prompt("Introduce tu cadena"));
	return string;
}
var longitud=0;
var stringMasLargo="";
function isLonger(cad_arg){
	for(pal of cad_arg)
	if(pal.length>longitud){
		longitud=pal.length;
		stringMasLargo=pal;
	}
}

function numPalabras(string){
	var cadena=string;
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

function palabraLarga(cad_arg){
	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
	let variosBlancos = /[ ]+/g;
	cad_arg = cad_arg.replace (primerBlanco,"");
	cad_arg = cad_arg.replace (ultimoBlanco,"");
	cad_arg = cad_arg.replace (variosBlancos," ");

	isLonger(cad_arg.split(" "));
	console.log("La palabra mas larga es:"+stringMasLargo);
}