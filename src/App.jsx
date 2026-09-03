import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cabecalho from './componentes/Cabecalho/Cabecalho'
import Principal from './componentes/principal/principal'

function App() {

  return (
<div>
  <Cabecalho/>
  <Principal/>
  <header>Cabeçalho</header>
  <main>Conteudo Principal</main>
  <footer>Rodapé</footer>
</div>
  )
}

export default App
