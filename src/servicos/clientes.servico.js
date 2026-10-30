import { buscarNoLocalStorage, salvarNoLocalStorage } from "./localstorage.servico"

export const cadastrarClienteNoLocalStorage = (cliente) => {
 const clientes = buscarNoLocalStorage("clientes") || [];
 clientes.push(cliente);
 salvarNoLocalStorage("clientes", clientes);
}

export const buscarClientesDoLocalStorage = () => {
  return buscarNoLocalStorage("clientes") || [];
}