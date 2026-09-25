export {};

function pegarPrimeiro<T>(arr: T[]): T {
  return arr[0];
}

const nome2 = pegarPrimeiro(["Ana", "João"]); // tipo: string
const numero2 = pegarPrimeiro([10, 20, 30]); // tipo: number

// console.log(nome2 * 2);
console.log(numero2 * 2);
