enum Status {
  Ativo = "ATIVO",
  Inativo = "INATIVO",
  Pendente = "PENDENTE",
  Cancelado = "CANCELADO",
}

function processarPedido(status: Status) {
  switch (status) {
    case Status.Ativo:
      console.log("Seu pedido está ativo e em processamento.");
      break;
    case Status.Inativo:
      console.log("Pedido está inativo. Entre em contato com o suporte.");
      break;
    case Status.Pendente:
      console.log("Pedido pendente. Aguardando confirmação de pagamento.");
      break;
    case Status.Cancelado:
      console.log("Pedido cancelado. Estorno será processado em 3 dias úteis.");
      break;
    default:
      console.log("Status desconhecido.");
  }
}

let statusPedido: Status = "pendente" as Status;

processarPedido(statusPedido);
