import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { toast } from 'react-toastify';
import { formatarComMascara, MASCARA_TELEFONE } from "../utils/formatarComMascara";

function PaginaCadastroCliente() { 
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");
    
    const cadastrarCliente = () => {
        const cliente = {
            nome,
            email,
            dataNascimento,
            telefone,
            cpf
        };
        toast.success("Cliente cadastrado com sucesso!");


    };

    return <Principal titulo="Cadastro de Cliente" voltarPara="/">
    <CampoCustomizado 
         label="Nome" 
        placeholder="Digite o nome do cliente"
        value={nome}
        onChange={(e) => setNome(e.target.value)} 
        maxLength={10}
        />
    <CampoCustomizado 
        label="Email" 
        placeholder="Digite o email do cliente"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        />
    <CampoCustomizado 
        label="Data de Nascimento" 
        type="date"
        value={dataNascimento} 
        onChange={(e) => setDataNascimento(e.target.value)} 
        />
    <CampoCustomizado 
        label="Telefone" 
        type="tel"
        placeholder="Digite o telefone do cliente"  
        value={telefone} 
        onChange={(e) => setTelefone(formatarComMascara(e.target.value, MASCARA_TELEFONE))} 
        />
    <CampoCustomizado 
        label="CPF" 
        placeholder="Digite o cpf do cliente"  
        value={cpf} 
        onChange={(e) => setCpf(e.target.value)} 
        />
<BotaoCustomizado tipo="primario" aoClicar={cadastrarCliente}>
    Cadastrar
</BotaoCustomizado>
    </Principal>
 }

 export default PaginaCadastroCliente;