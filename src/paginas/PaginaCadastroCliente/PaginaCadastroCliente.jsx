import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { toast } from 'react-toastify';

function PaginaCadastroCliente() { 
    return <Principal titulo="Cadastro de Cliente" voltarPara="/">
<CampoCustomizado label="Nome" placeholder="Digite o nome do cliente" />
<CampoCustomizado label="Email" placeholder="Digite o email do cliente" />
<CampoCustomizado label="Data de Nascimento" placeholder="Digite a data de nascimento do cliente" />
<CampoCustomizado label="Telefone" placeholder="Digite o telefone do cliente" />
<CampoCustomizado label="CPF" placeholder="Digite o cpf do cliente" />

<BotaoCustomizado tipo="primario" aoClicar={() =>  toast.success("Cliente cadastrado com sucesso!")}>
    Cadastrar
</BotaoCustomizado>
    </Principal>
 }

 export default PaginaCadastroCliente;