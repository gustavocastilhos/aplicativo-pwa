import './TamanhoTexto.css';

function TamanhoTexto({ texto = '' }) {
  return (
    <div className="tamanho-texto">
      O texto possui {texto.length} caracteres.
    </div>
  );
}

export default TamanhoTexto;