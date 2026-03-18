import { useState } from 'react'

function Exercicio3() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: ''
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormulario(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <h2>Exercício 3 – Cadastro Simples</h2>

      <input
        type="text"
        name="nome"
        placeholder="Digite o nome"
        value={formulario.nome}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Digite o email"
        value={formulario.email}
        onChange={handleChange}
      />

      <p>Nome: {formulario.nome}</p>
      <p>Email: {formulario.email}</p>
    </div>
  )
}

export default Exercicio3
