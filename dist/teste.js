"use strict";
var Status;
(function (Status) {
    Status["Ativo"] = "ATIVO";
    Status["Inativo"] = "INATIVO";
    Status["Pendente"] = "PENDENTE";
    Status["Pendente2"] = "pendente";
    Status["Cancelado"] = "CANCELADO";
})(Status || (Status = {}));
function processarPedido(status) {
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
        case Status.Pendente2:
            console.log("teste do minusculo");
            break;
        case Status.Cancelado:
            console.log("Pedido cancelado. Estorno será processado em 3 dias úteis.");
            break;
        default:
            console.log("Status desconhecido.");
    }
}
let statusPedido = "pendente";
processarPedido(statusPedido);
