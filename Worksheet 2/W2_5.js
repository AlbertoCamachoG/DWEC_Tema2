var a=(parseInt(prompt("Introduce el valor de x^2")));
var b=(parseInt(prompt("Introduce el valor de x")));
var c=(parseInt(prompt("Introduce el valor del coeficiente libre")));
function ecuacion(ax,bx,cx,sign){
//-b+-raiz(b*b-4*a*c)/2a
if(sign===1)
	return((-bx+Math.sqrt((bx*bx)-(4*ax*cx)))/2*ax);
return((-bx-Math.sqrt((bx*bx)-(4*ax*cx)))/2*ax);
}
document.write("la x de "+a+"x<sup>2</sup> + "+b+"x + "+c+" = "+ecuacion(a,b,c,1)+" y "+ecuacion(a,b,c,0));