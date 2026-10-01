"use strict";
const nomes = ["Ana", "Bob", "Carlos"];
function processarLista(lista, callback) {
    callback(lista);
}
const dizerOla = (lista) => {
    for (const item of lista) {
        console.log("Olá," + item);
    }
};
console.log(processarLista(nomes, dizerOla));
