import { useState } from 'react'

function Exercicio10() {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa() {
    if (tarefa.trim() === '') return

    setTarefas(prev => [...prev, { id: crypto.randomUUID(), valor: tarefa }])
    setTarefa('')
  }

  function removerTarefa(id) {
    setTarefas(prev => prev.filter((item) => item.id !== id))
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') adicionarTarefa()
  }

  return (
    <div>
      <h2>Exercício 10 – Mini Sistema de Tarefas</h2>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(event) => setTarefa(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <p>Você tem {tarefas.length} tarefas cadastradas</p>

      <ul>
        {tarefas.map((item) => (
          <li key={item.id}>
            {item.valor} <button className="remover" onClick={() => removerTarefa(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Exercicio10
