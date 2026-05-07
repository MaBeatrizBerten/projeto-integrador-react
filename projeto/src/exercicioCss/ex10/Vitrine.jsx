import './Vitrine.css'

const produtos = [
  { id: 1, nome: 'Notebook Gamer', preco: 'R$ 5.999,00', categoria: 'Informática' },
  { id: 2, nome: 'Tênis Esportivo', preco: 'R$ 349,00', categoria: 'Esportes' },
  { id: 3, nome: 'Fone Bluetooth', preco: 'R$ 199,00', categoria: 'Eletrônicos' },
  { id: 4, nome: 'Mochila Urbana', preco: 'R$ 129,00', categoria: 'Acessórios' },
]

function Vitrine() {
  return (
    <div className="vitrine">
      {produtos.map((produto) => (
        <div key={produto.id} className="produto-card">
          <div className="produto-imagem" />
          <h3>{produto.nome}</h3>
          <p className="categoria">{produto.categoria}</p>
          <p className="preco">{produto.preco}</p>
          <button className="btn-comprar">Comprar</button>
        </div>
      ))}
    </div>
  )
}

export default Vitrine