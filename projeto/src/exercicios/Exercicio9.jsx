import { useState } from 'react'

function Exercicio9() {
  const [contador, setContador] = useState(0)
  const [historico, setHistorico] = useState([])

  function incrementar() {
    setContador(prev => {
      const novoValor = prev + 1
      setHistorico(h => [...h, { id: crypto.randomUUID(), valor: novoValor }])
      return novoValor
    })
  }

  return (
    <div>
      <h2>Exercício 9 – Contador com Histórico</h2>

      <p>Valor atual: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>

      <h3>Histórico:</h3>
      <ul>
        {historico.map((entrada) => (
          <li key={entrada.id}>{entrada.valor}</li>
        ))}
      </ul>
    </div>
  )
}

export default Exercicio9
