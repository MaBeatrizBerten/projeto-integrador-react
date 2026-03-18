function Formulario({ nome, onNomeChange, adicionarNome }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite um nome"
        value={nome}
        onChange={(e) => onNomeChange(e.target.value)}
      />
      <button onClick={adicionarNome}>Adicionar</button>
    </div>
  )
}

export default Formulario
