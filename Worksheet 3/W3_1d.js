function getString(texto){
	var string=(prompt(texto));
	return string;
}

var longitud=0;

function separarCadena(cad_arg, lMaxima){
	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
	let variosBlancos = /[ ]+/g;
	cad_arg = cad_arg.replace (primerBlanco,"");
	cad_arg = cad_arg.replace (ultimoBlanco,"");
	cad_arg = cad_arg.replace (variosBlancos," ");
	longitud=lMaxima;
	isLonger(cad_arg.split(" "));
}

function isLonger(cad_arg){
	for(pal of cad_arg)
	if(pal.length>=longitud){
		console.log(pal);
	}
}

