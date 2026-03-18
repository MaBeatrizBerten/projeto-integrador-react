import { useState } from 'react'
import Formulario from './Formulario'
import Lista from './Lista'

function Exercicio6() {
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
      <h2>Exercício 6 – Componentização da Lista</h2>

      <Formulario
        nome={nome}
        onNomeChange={setNome}
        adicionarNome={adicionarNome}
      />

      <Lista nomes={nomes} removerNome={removerNome} />
    </div>
  )
}

export default Exercicio6
