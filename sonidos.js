
const canciones = {
	cancion1: "brr,fiu,cric-cric,brrah",
	cancion2: "pep,birip,trri-trri,croac",
	cancion3: "bri-bri,plop,cric-cric,brrah",
}

const recuperar = () => {
	const sonido = document.getElementById("sonido").value;
	let sonidosRestante="";

	for (let key in canciones) {
		const sonidos = canciones[key].split(",");
		for (let i = 0; i < sonidos.length; i++) {
			if(sonidos[i]==sonido){
				for(let j=i+1;j<sonidos.length;j++){
				 	sonidosRestante+=" "+sonidos[j];
				}
			}
		}
	}

	if(sonidosRestante){
		document.getElementById("respuesta").innerHTML = sonidosRestante;
	}
	else{
		document.getElementById("respuesta").innerHTML = "Sin sonido";
	}
	
}