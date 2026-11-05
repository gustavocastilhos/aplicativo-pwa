import { use, useEffect, useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { toast } from 'react-toastify';
import { formatarComMascara, MASCARA_CPF, MASCARA_TELEFONE } from "../utils/formatarComMascara";
import validarCPF from "../utils/validarCPF";
import validarEmail from "../utils/validarEMAIL";
import { buscarClientesDoLocalStorage, cadastrarClienteNoLocalStorage } from "../../servicos/clientes.servico";
import { useParams } from "react-router-dom";

function PaginaCadastroCliente() {
    const [formclientes, setFormeClientes] = useState({
        id: "",
        nome: "",
        email: "",
        dataNascimento: "",
        telefone: "",
        cpf: ""

    });


    const params = useParams();
    useEffect(() => {
        if (params.id) {
            const clientes = buscarClientesDoLocalStorage().find((cliente) => cliente.id === +params.id);
            if (clientes) {
                setFormeClientes(clientes);
            }
        }
    }, [params.id]);

    function cadastrarCliente() {
        if (!formclientes.nome.trim() || !formclientes.email.trim() || !validarEmail(formclientes.email)) {
            toast.error("Preencha o campo nome e email corretamente!");
            return;
        }
        if (!formclientes.dataNascimento) {
            toast.error("Preencha o campo data de nascimento!");
            return;
        }
        if (!formclientes.telefone.trim()) {
            toast.error("Preencha o campo telefone!");
            return;
        }
        if (formclientes.cpf.trim() && !validarCPF(formclientes.cpf)) {
            toast.error("CPF inválido!");
            return;
        }

        const cliente = {
            ...formclientes,
            id: Date.now(),
            nome: formclientes.nome,
            email: formclientes.email,
            dataNascimento: formclientes.dataNascimento,
            telefone: formclientes.telefone,
            cpf: formclientes.cpf
        };
        cadastrarClienteNoLocalStorage(cliente);
        toast.success("Cliente cadastrado com sucesso!");
    }

const titulo = formclientes.id ? "Editar Cliente" : "Cadastro de Cliente";

    return <Principal titulo={titulo} voltarPara="/">
        <CampoCustomizado
            label="Nome"
            placeholder="Digite o nome do cliente"
            value={formclientes.nome}
            onChange={(e) => setFormeClientes({ ...formclientes, nome: e.target.value })}
            maxLength={10}
        />
        <CampoCustomizado
            label="Email"
            placeholder="Digite o email do cliente"
            value={formclientes.email}
            onChange={(e) => setFormeClientes({ ...formclientes, email: e.target.value })}
        />
        <CampoCustomizado
            label="Data de Nascimento"
            type="date"
            value={formclientes.dataNascimento}
            onChange={(e) => setFormeClientes({ ...formclientes, dataNascimento: e.target.value })}
        />
        <CampoCustomizado
            label="Telefone"
            type="tel"
            placeholder="Digite o telefone do cliente"
            value={formclientes.telefone}
            onChange={(e) => setFormeClientes({ ...formclientes, telefone: formatarComMascara(e.target.value, MASCARA_TELEFONE) })}
        />
        <CampoCustomizado
            label="CPF"
            placeholder="Digite o cpf do cliente"
            value={formclientes.cpf}
            onChange={(e) => setFormeClientes({ ...formclientes, cpf: formatarComMascara(e.target.value, MASCARA_CPF) })}
        />
        <BotaoCustomizado tipo="primario" aoClicar={cadastrarCliente}>
            Cadastrar
        </BotaoCustomizado>
    </Principal>
}

export default PaginaCadastroCliente;