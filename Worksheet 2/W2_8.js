var numero=Math.floor(Math.random()*3+1);
console.log(numero);
function foto() {
    var img = document.createElement("img");
    img.width = 300;
    img.height = 400;
    switch(numero){
	case 1:img.src = "saber.jpg";break;
	case 2:img.src = "okita.jpg";break;
	case 3:img.src = "mordred.png";
	}
    img.alt = "alt";
    document.body.appendChild(img);
}


