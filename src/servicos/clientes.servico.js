import { buscarNoLocalStorage, salvarNoLocalStorage } from "./localstorage.servico"

export const cadastrarClienteNoLocalStorage = (cliente) => {
 const clientes = buscarNoLocalStorage("clientes") || [];
if (!cliente.id) {
    cliente.id = Date.now();
    clientes.push(cliente);
}else {
    const index = clientes.findIndex((c) => c.id === cliente.id);
      clientes[index] = cliente;
    
}
salvarNoLocalStorage("clientes", clientes);
}

export const buscarClientesDoLocalStorage = () => {
  return buscarNoLocalStorage("clientes") || [];
}