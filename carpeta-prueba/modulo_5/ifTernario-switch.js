let dia = 'jueves'
/*function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}*/
switch (dia){
    case "viernes" :
        console.log('buen finde');
        break;
    case "lunes" :
        console.log('buena semana');
        break;
    default:
        console.log('buen dia');
}


//ejercicio 2
function tengoClases(dia) {
	switch (dia){
	case "lunes":
	case "miércoles":
	case "viernes":
		console.log("tenés clases")	;
		break;
	default:
		console.log("no tenés clases");
	}
}

//ejercicio 3
let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA : bicicletaB;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );