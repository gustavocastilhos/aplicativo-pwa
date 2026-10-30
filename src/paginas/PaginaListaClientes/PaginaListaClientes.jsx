import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { buscarClientesDoLocalStorage } from "../../servicos/clientes.servico";



function PaginaListaClientes() {

const clientes = buscarClientesDoLocalStorage();

    return <Principal titulo="Lista de Clientes" voltarPara="/">

    
        <div>
            <ul>
                {clientes.map((cliente, index) => (    
                    <li key={index}>{cliente.nome}  -  {cliente.email}</li>
                ))}
            </ul>
      </div>  
    </Principal>
}

export default PaginaListaClientes;