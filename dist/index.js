"use strict";
const conjuntoDeConjuntos = [
    ["Fabio", "Luiz", "Matheus"],
    ["Jose", "Luiz"],
];
const usuarioBuscado = "Luiz";
let usuarioEncontrado = false;
// usuarioLoop: for (let i = 0; i < conjuntoDeConjuntos.length; i++) {
//   for (let j = 0; j < conjuntoDeConjuntos[i].length; j++) {
//     if (conjuntoDeConjuntos[i][j] === usuarioBuscado) {
//       console.log("nao usando a label ");
//       console.log(`Encontrado na Loja ${i + 1}, posição ${j + 1}`);
//       usuarioEncontrado = true;
//       break usuarioLoop;
//     }
//   }
// }
usuarioLoop: for (const usuario of conjuntoDeConjuntos) {
    for (const nome of usuario) {
        if (nome === usuarioBuscado) {
            console.log(`usuário ${nome} encontrado`);
            break usuarioLoop;
        }
    }
}
// if (!usuarioEncontrado) {
//   console.log("Usuário não encontrado em nenhuma loja.");
// }
