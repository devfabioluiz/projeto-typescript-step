"use strict";
// type Pessoa = {
//   nome: string;
//   saldo: number;
// };
// const exemplo: Pessoa = {
//   nome: "Fabio",
//   saldo: 3000,
// };
// function deposito(saldoCliente: number, valorDeposito: number): number {
//   return saldoCliente + valorDeposito;
// }
// console.log(deposito(exemplo.saldo, 152));
const usuarioEstaLogado = false;
if (usuarioEstaLogado) {
    console.log("Bem-vindo ao painel!");
}
else {
    console.log("Você precisa fazer login para acessar o painel.");
}
