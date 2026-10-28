import './NumerosImpares.css';

function NumerosImpares({ numeros = [] }) {
  const impares = numeros.filter(num => num % 2 !== 0);

  return (
    <ul className="numeros-impares">
      {impares.map((numero, index) => (
        <li key={index}>{numero}</li>
      ))}
    </ul>
  );
}

export default NumerosImpares;