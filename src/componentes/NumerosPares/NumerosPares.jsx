import './NumerosPares.css';

function NumerosPares({ numeros = [] }) {
  // Filtra apenas os números pares (resto da divisão por 2 igual a 0)
  const pares = numeros.filter(num => num % 2 === 0);

  return (
    <ul className="numeros-pares">
      {pares.map((numero, index) => (
        <li key={index}>{numero}</li>
      ))}
    </ul>
  );
}

export default NumerosPares;