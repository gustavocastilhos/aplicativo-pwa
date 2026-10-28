import React from 'react';
import './VerificarIdade.css';

function VerificarIdade({ idade = 0 }) {
  const ehMaior = idade >= 18;
  const mensagem = ehMaior 
    ? `${idade} anos, é maior de idade.` 
    : `${idade} anos, é menor de idade.`;

  return (
    <div className={`verificar-idade ${ehMaior ? 'maior' : 'menor'}`}>
      {mensagem}
    </div>
  );
}

export default VerificarIdade;