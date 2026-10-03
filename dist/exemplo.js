"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function buscarUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Usuário #${id}`);
        }, 1000);
    });
}
// async/await — forma moderna de trabalhar com Promises
function listarUsuarios() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Buscando...");
        const usuario1 = yield buscarUsuario(1);
        console.log(usuario1); // "Usuário #1"
        const usuario2 = yield buscarUsuario(2);
        console.log(usuario2); // "Usuário #2"
        console.log("Pronto!");
    });
}
// Promise.all — buscar vários ao mesmo tempo
function buscarTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const resultados = yield Promise.all([
            buscarUsuario(1),
            buscarUsuario(2),
            buscarUsuario(3),
        ]);
        return resultados;
    });
}
listarUsuarios();
buscarTodos().then((r) => console.log(r));
