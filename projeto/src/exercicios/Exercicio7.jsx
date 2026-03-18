import { useState } from 'react'

function Exercicio7() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: ''
  })

  const [usuarios, setUsuarios] = useState([])

  function handleChange(event) {
    const { name, value } = event.target

    setFormulario(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function salvarUsuario() {
    if (formulario.nome.trim() === '') {
      alert('O nome não pode ser vazio')
      return
    }

    setUsuarios(prev => [
      ...prev,
      { id: crypto.randomUUID(), ...formulario }
    ])

    setFormulario({ nome: '', email: '' })
  }

  return (
    <div>
      <h2>Exercício 7 – Sistema de Cadastro Completo</h2>

      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formulario.nome}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formulario.email}
        onChange={handleChange}
      />

      <button onClick={salvarUsuario}>Salvar</button>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Exercicio7
