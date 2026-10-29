import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { toast } from 'react-toastify';
import { formatarComMascara, MASCARA_CPF, MASCARA_TELEFONE } from "../utils/formatarComMascara";
import validarCPF from "../utils/validarCPF";
import validarEmail from "../utils/validarEMAIL";

function PaginaCadastroCliente() { 
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");

const cadastrarCliente = () => {
    if(!nome.trim() || !email.trim() || !validarEmail(email)) {
        toast.error("Preencha o campo nome e email corretamente!");
        return;
    }
    if(!dataNascimento) {
        toast.error("Preencha o campo data de nascimento!");
        return;
    }
    if(!telefone.trim()) {
        toast.error("Preencha o campo telefone!");
        return;
    }
    if(cpf.trim() && !validarCPF(cpf)) {
        toast.error("CPF inválido!");
        return;
    }

    const cliente = {
        // propriedades do cliente aqui
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
        onChange={(e) => setCpf(formatarComMascara(e.target.value, MASCARA_CPF))}
        />
<BotaoCustomizado tipo="primario" aoClicar={cadastrarCliente}>
    Cadastrar
</BotaoCustomizado>
    </Principal>
 }

 export default PaginaCadastroCliente;