import { useState } from 'react'

function Exercicio5() {
  const [nome, setNome] = useState('')
  const [nomes, setNomes] = useState([])

  function adicionarNome() {
    if (nome.trim() === '') return

    setNomes(prev => [...prev, { id: crypto.randomUUID(), valor: nome }])
    setNome('')
  }

  function removerNome(id) {
    setNomes(prev => prev.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h2>Exercício 5 – Lista com Remoção</h2>

      <input
        type="text"
        placeholder="Digite um nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <button onClick={adicionarNome}>Adicionar</button>

      <ul>
        {nomes.map((item) => (
          <li key={item.id}>
            {item.valor} <button className="remover" onClick={() => removerNome(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Exercicio5
