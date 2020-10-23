function getString(texto){
	var string=(prompt(texto));
	return string;
}

var longitud=0;

function cadenaBien(cad_arg){
	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
	let variosBlancos = /[ ]+/g;
	cad_arg = cad_arg.replace (primerBlanco,"");
	cad_arg = cad_arg.replace (ultimoBlanco,"");
	cad_arg = cad_arg.replace (variosBlancos," ");
	cambiarCases(cad_arg);
}

function cambiarCases(cad_arg){
	document.write(cad_arg.charAt(0).toUpperCase());
	for(var i=1;i<cad_arg.length;i++)
		document.write(cad_arg.charAt(i).toLowerCase());
	}