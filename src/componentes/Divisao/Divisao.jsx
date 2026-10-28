import './Divisao.css';

function Divisao({ num1 = 0, num2 = 1 }) {
  const resultado = num1 / num2;

  return (
    <div className="divisao">
      {num1} / {num2} = {resultado}
    </div>
  );
}

export default Divisao;