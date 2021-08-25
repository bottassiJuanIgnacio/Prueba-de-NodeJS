function loro(texto){
    for (let i = 0; i < 5; i++) {
        console.log(texto);
    }
}
//ejercicio 2

function noParesDeContarImparesHasta(numero){
    let sumaImpares = 0;
    for (let i = 0; i <= numero; i++) {
         i % 2 == 1 ? sumaImpares + 1 : '';     
    }
    return sumaImpares;
}
console.log(noParesDeContarImparesHasta(4));