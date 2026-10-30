import Principal from "../../componentes/Principal/Principal";
import { buscarClientesDoLocalStorage } from "../../servicos/clientes.servico";
import "./PaginaListaClientes.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


function PaginaListaClientes() {

    const clientes = buscarClientesDoLocalStorage();

    return <Principal titulo="Lista de Clientes" voltarPara="/">

        {clientes.map((cliente) => (
            <div className="PaginaListaClientes_item">
                <h3>{cliente.nome}</h3>
                <h4>{cliente.telefone}</h4>
                <p>{cliente.email} </p>
                <FaPencilAlt />
                <FaTrashAlt />
            </div>
        ))}


    </Principal>
}

export default PaginaListaClientes;