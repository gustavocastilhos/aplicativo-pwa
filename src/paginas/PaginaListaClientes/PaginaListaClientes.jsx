import { toast } from "react-toastify";
import Principal from "../../componentes/Principal/Principal";
import { buscarClientesDoLocalStorage } from "../../servicos/clientes.servico";
import "./PaginaListaClientes.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { use, useState } from "react";
import { salvarNoLocalStorage } from "../../servicos/localstorage.servico";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";




function PaginaListaClientes() {
    const navigate = useNavigate();
    const [clientes, setClientes] = useState(buscarClientesDoLocalStorage());
    const [filtro, setFiltro] = useState("");

    const excluirCliente = (cliente) => {
     if (confirm(`Deseja realmente excluir o cliente ${cliente.nome}?`)) {
             toast.success("Tarefa removida com sucesso!");
            // Aqui você pode adicionar a lógica para excluir o cliente do localStorage ou de onde estiver armazenando os clientes.
            const clientesAtualizados = clientes.filter((item) => item.id !== cliente.id);
            setClientes(clientesAtualizados);
            salvarNoLocalStorage("clientes", clientesAtualizados);
            toast.success("Cliente removido com sucesso!");
        }
    }

    const editarCliente = (cliente) => {
        navigate("/cadastro-cliente/" + cliente.id);
    }

    const clientesFiltrados = clientes.filter((cliente) => {
       return cliente.nome.toLowerCase().includes(filtro.toLowerCase())
    });

    return <Principal titulo="Lista de Clientes" voltarPara="/">
        <CampoCustomizado
            type="search"
            label="Buscar Cliente"
            placeholder="Digite o nome do cliente"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)} 
        />

        {clientesFiltrados.map((cliente) => (
            <div className="PaginaListaClientes_item">
                <div>
                <h3>{cliente.nome}</h3>
                <h4>{cliente.telefone}</h4>
                <p>{cliente.email} </p>
                </div>

                <div>
                        <FaPencilAlt size={17} onClick={() => editarCliente(cliente)} />
                        <FaTrashAlt size={17} color="red" onClick={() => excluirCliente(cliente)} />
                </div>
            </div>
        ))}
<div className="PaginaListaClientes_adicionar">
    <IoMdAddCircle size={24} onClick={() => navigate("/cadastro-cliente")} />
</div>

    </Principal>
}

export default PaginaListaClientes;