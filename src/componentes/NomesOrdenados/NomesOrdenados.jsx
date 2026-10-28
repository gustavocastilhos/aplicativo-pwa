import './NomesOrdenados.css';

function NomesOrdenados({ nomes = [] }) {
  // Cria uma cópia com [...nomes] e ordena em ordem alfabética usando sort()
  const nomesOrdenados = [...nomes].sort((a, b) => a.localeCompare(b));

  return (
    <ol className="nomes-ordenados">
      {nomesOrdenados.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ol>
  );
}

export default NomesOrdenados;