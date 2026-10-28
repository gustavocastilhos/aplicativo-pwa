import './Multiplicacao.css';

function Multiplicacao({ num1 = 0, num2 = 0 }) {
  const resultado = num1 * num2;

  return (
    <div className="multiplicacao">
      {num1} * {num2} = {resultado}
    </div>
  );
}

export default Multiplicacao;