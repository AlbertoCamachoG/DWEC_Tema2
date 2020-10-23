function addOnlyNums(){
	var blablabla=0;
	for(var i=0;i<arguments.length;i++){
		if(Number.isInteger(arguments[i])){
			blablabla=blablabla+arguments[i];
		}
	}
	return blablabla;
}