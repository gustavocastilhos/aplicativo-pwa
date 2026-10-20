import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("Fazer Café");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    tarefas.push(descricaoTarefa);
    setTarefas([...tarefas]);

  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
       <CampoCustomizado  
        label="Descrição da Tarefa"
        type="text"
        placeholder="Digite uma tarefa"
        value={descricaoTarefa}
        onChange={(evento) => {setDescricaoTarefa(evento.target.value);
        }}/>
     

    <CampoCustomizado />

      <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
        Adicionar Tarefa
      </BotaoCustomizado>
        
        {tarefas.map((itemTarefa, index) => {
          return <li> {itemTarefa} </li>
        })}

    </Principal>
  );
}

export default PaginaListaTarefas;
