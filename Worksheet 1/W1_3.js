var contador =60;
function imprime(){
	console.log(contador);
	contador--;
	if(contador>=0)
		setTimeout(imprime,1000);
}
setTimeout(imprime,1000);//un callback no lleva paréntesis y es el nombre de la funcion