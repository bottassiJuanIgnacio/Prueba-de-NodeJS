function menciona(texto,palabra){
    return texto.indexOf(palabra) != -1
}
let frase = '¡Hola!, soy Carli';
function slice(frase){

    let licenciada = frase.slice(frase.indexOf("Carli"));
    return licenciada
}
console.log(slice(frase));