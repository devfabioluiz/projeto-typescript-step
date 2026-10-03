// Promise tipada: Promise<tipo do resolve>
export {};
function buscarUsuario(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Usuário #${id}`);
    }, 1000);
  });
}
// async/await — forma moderna de trabalhar com Promises
async function listarUsuarios(): Promise<void> {
  console.log("Buscando...");
  const usuario1 = await buscarUsuario(1);
  console.log(usuario1); // "Usuário #1"
  const usuario2 = await buscarUsuario(2);
  console.log(usuario2); // "Usuário #2"
  console.log("Pronto!");
}

// Promise.all — buscar vários ao mesmo tempo
async function buscarTodos(): Promise<string[]> {
  const resultados = await Promise.all([
    buscarUsuario(1),
    buscarUsuario(2),
    buscarUsuario(3),
  ]);
  return resultados;
}

listarUsuarios();
buscarTodos().then((r) => console.log(r));
