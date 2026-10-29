import { buscarNoLocalStorage, salvarNoLocalStorage } from "./localstorage.servico"

export const cadastrarCliente = (cliente) => {
 const clientes = buscarNoLocalStorage("clientes") || [];
 clientes.push(cliente);
 salvarNoLocalStorage("clientes", clientes);
}