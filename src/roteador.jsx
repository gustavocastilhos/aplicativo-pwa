import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaListaProdutos from "./paginas/PaginaListaProdutos/PaginaListaProdutos";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaListaTarefas from "./paginas/PaginaListaTarefas/PaginaListaTarefas";
import PaginaCadastroCliente from "./paginas/PaginaCadastroCliente/PaginaCadastroCliente";
import PaginaListaClientes from "./paginas/PaginaListaClientes/PaginaListaClientes";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <PaginaListaProdutos />,
  },
  {
    path: "fuscao-preto",
    element: <PaginaListaTarefas />,
  },
  {
    path: "cadastro-cliente",
    element: <PaginaCadastroCliente />,
  },
  {
    path: "lista-clientes",
    element: <PaginaListaClientes />,
  }
  
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;