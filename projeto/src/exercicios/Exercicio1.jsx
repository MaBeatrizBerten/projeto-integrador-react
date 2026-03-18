import { useState } from 'react'

function Exercicio1() {
  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(prev => prev + 1)
  }

  function decrementar() {
    setContador(prev => prev - 1)
  }

  return (
    <div>
      <h2>Exercício 1 – Contador Interativo</h2>
      <p>Número: {contador}</p>

      <button className="botao" onClick={incrementar}>Incrementar</button>
      <button className="botao" onClick={decrementar}>Decrementar</button>
    </div>
  )
}

export default Exercicio1
