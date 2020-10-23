function getString(){
	var string=(prompt("Introduce tu cadena"));
	return string;
}

function invierteCadena(cad_arg){
	var length=cad_arg.length;
	var cadInv="";
	while (length>=0){
		cadInv=cadInv+cad_arg.charAt(length);
		length--;
	}
	document.write(cadInv+" ");;
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

function inviertePalabras(cad_arg){
	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
	let variosBlancos = /[ ]+/g;
	cad_arg = cad_arg.replace (primerBlanco,"");
	cad_arg = cad_arg.replace (ultimoBlanco,"");
	cad_arg = cad_arg.replace (variosBlancos," ");
	var length=cad_arg.length-1;
	for(var i=0;i<=numPalabras(cad_arg)-1;i++){
		invierteCadena(cad_arg.substring(0,cad_arg.indexOf(" ")));
		cad_arg=cad_arg.substring(cad_arg.indexOf(" "),length);
	}
}