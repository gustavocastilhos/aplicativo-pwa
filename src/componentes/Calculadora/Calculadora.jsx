import './Calculadora.css';

function Calculadora({ num1 = 0, num2 = 0, operacao = 'soma' }) {
  let resultado = 0;
  let simbolo = '';

  switch (operacao) {
    case 'soma':
      resultado = num1 + num2;
      simbolo = '+';
      break;
    case 'subtracao':
      resultado = num1 - num2;
      simbolo = '-';
      break;
    case 'multiplicacao':
      resultado = num1 * num2;
      simbolo = '*';
      break;
    case 'divisao':
      resultado = num1 / num2;
      simbolo = '/';
      break;
    default:
      return <div className="calculadora">Operação inválida</div>;
  }

  return (
    <div className="calculadora">
      {num1} {simbolo} {num2} = {resultado}
    </div>
  );
}

export default Calculadora;