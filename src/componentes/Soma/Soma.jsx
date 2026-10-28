import './Soma.css';

function Soma({ num1 = 0, num2 = 0 }) {
  const resultado = num1 + num2;

  return (
    <div className="soma">
      {num1} + {num2} = {resultado}
    </div>
  );
}

export default Soma;