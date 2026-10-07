import "./App.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import Roteador from "./roteador";

function App() {
    return (
        <>
            <Cabecalho />
            <Roteador />
            <Rodape />
        </>
    );
}

export default App;