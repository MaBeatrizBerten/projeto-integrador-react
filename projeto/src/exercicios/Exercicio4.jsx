import { useState } from 'react'

function Exercicio4() {
  const [nome, setNome] = useState('')
  const [nomes, setNomes] = useState([])

  function adicionarNome() {
    if (nome.trim() === '') return

    setNomes(prev => [...prev, { id: crypto.randomUUID(), valor: nome }])
    setNome('')
  }

  return (
    <div>
      <h2>Exercício 4 – Lista de Nomes</h2>

      <input
        type="text"
        placeholder="Digite um nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <button onClick={adicionarNome}>Adicionar</button>

      <ul>
        {nomes.map((item) => (
          <li key={item.id}>{item.valor}</li>
        ))}
      </ul>
    </div>
  )
}

export default Exercicio4
