import './ListaProdutos.css';

function ListaProdutos({ produtos = [] }) {
  return (
    <ul className="lista-produtos">
      {produtos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListaProdutos;