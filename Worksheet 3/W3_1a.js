function getString(){
	var cadena=(prompt("Introduce tu cadena"));
	return cadena;
}
function invierteCadena(cad_arg){
	var length=cad_arg.length;
	var cadInv="";
	while (length>=0){
		cadInv=cadInv+cad_arg.charAt(length);
		length--;
	}
	document.write(cadInv);;
}