function getString(){
	var cadena=(prompt("Introduce tu cadena"));
	return cadena;
}
function upperCases(string){
	var upper=false;
	var lower=false;
	var x=string.length-1;
	while(x>=0){
		var char=string.charAt(x);
		if(char===char.toUpperCase() && char!==" " && isNaN(char*1)){
			upper=true;
		}
		if(char===char.toLowerCase() && char!==" " && isNaN(char*1)){
			lower=true;
		}
		x--;
	}
	if(upper===true && lower===true)
		console.log("Tiene ambos tipos");
	else
		if(upper===true)
			console.log("Tiene mayusculas solo");
		else
			console.log("Tiene minusculas solo");
}