import { useState } from 'react'

function Exercicio2() {
  const [nome, setNome] = useState('')

  function handleChange(event) {
    setNome(event.target.value)
  }

  return (
    <div>
      <h2>Exercício 2 – Campo de Nome Dinâmico</h2>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={handleChange}
      />

      {nome && <p>Olá {nome}</p>}
    </div>
  )
}

export default Exercicio2
