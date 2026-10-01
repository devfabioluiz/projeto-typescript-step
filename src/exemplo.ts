const nomes: string[] = ["Ana", "Bob", "Carlos"];

function processarLista(lista: string[], callback: (item: string) => void) {
  for (const item of lista) {
    callback(item);
  }
}

const dizerOla = (nome: string) => {
  console.log("Olá," + nome);
};

console.log(processarLista(nomes, dizerOla));
