function getString(){
	var cadena=(prompt("Introduce tu cadena"));
	return cadena;
}
function isPalin(string){
	var x=string.length-1;
	var igual=true;
	for(var i=0;i<=x;i++){
		if(string.charAt(i)!==string.charAt(x)){
			igual=false;
		}
		x--;
	}
	if(igual)
		console.log("Es un palindromo");
	else
		console.log("No es un palindromo");

}