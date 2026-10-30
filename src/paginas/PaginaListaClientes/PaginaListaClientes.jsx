import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { buscarClientesDoLocalStorage } from "../../servicos/clientes.servico";
import "./PaginaListaClientes.css";



function PaginaListaClientes() {

    const clientes = buscarClientesDoLocalStorage();

    return <Principal titulo="Lista de Clientes" voltarPara="/">

        {clientes.map((cliente) => (
            <div className="PaginaListaClientes_item">
                <h3>{cliente.nome}</h3>
                <h4>{cliente.telefone}</h4>
                {cliente.email}

            </div>
        ))}


    </Principal>
}

export default PaginaListaClientes;