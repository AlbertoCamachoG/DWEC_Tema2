//Worksheet 4 -->ej 1,2
//Worksheet 6 -->ej 2c,2d,2e,2f
document.write('<table> <tr> <th>');
	document.write('Elementos');
document.write('</th> </tr>');
for(prop in navigator){
	document.write('<tr> <td>');
		document.write(prop);
	document.write('</td> </tr>');
}

document.write('</table>');