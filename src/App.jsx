import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <header>Cabeçalho</header>
  <main>Conteudo Principal</main>
  <footer>Rodapé</footer>
</div>
  )
}

export default App
