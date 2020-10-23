function getString(texto){
	var string=(prompt(texto));
	return string;
}

var fila=0;

function crearTabla(cad_arg){
	cad_arg=cad_arg.trim();
	//var inversa=();
	document.write("<table>");
	for(var i=0;i<cad_arg.length;i++){
		document.write("<tr>");
		for(var j=0;j<cad_arg.length;j++){
		document.write("<td>");
		document.write(cad_arg.charAt(j));
		document.write(cad_arg.charAt(j));
		}
		document.write("</td>");
	}
	document.write("</tr>");
	}
	document.write("</table>");
