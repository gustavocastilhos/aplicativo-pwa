import './Subtracao.css';

function Subtracao({ num1 = 0, num2 = 0 }) {
  const resultado = num1 - num2;

  return (
    <div className="subtracao">
      {num1} - {num2} = {resultado}
    </div>
  );
}

export default Subtracao;