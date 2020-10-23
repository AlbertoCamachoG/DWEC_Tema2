document.write("<table>");
document.write("<tr><td>X</td><td>Seno de X</td></tr>");
for(var i=1;i<11;i++){
	document.write("<tr>");
	document.write("<td>"+i+"</td>");
	document.write("<td>"+Math.sin(i)+"</td>");
	document.write("</tr>");
}
document.write("</table>");