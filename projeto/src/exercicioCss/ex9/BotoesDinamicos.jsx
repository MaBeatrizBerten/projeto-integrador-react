import './BotoesDinamicos.css'

const botoes = [
  { label: 'Sucesso', tipo: 'sucesso' },
  { label: 'Erro', tipo: 'erro' },
  { label: 'Aviso', tipo: 'aviso' },
]

function BotoesDinamicos() {
  return (
    <div className="botoes-container">
      {botoes.map((btn, index) => (
        <button key={index} className={`botao ${btn.tipo}`}>
          {btn.label}
        </button>
      ))}
    </div>
  )
}

export default BotoesDinamicos