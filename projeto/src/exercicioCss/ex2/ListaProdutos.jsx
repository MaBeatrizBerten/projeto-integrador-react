import './ListaProdutos.css'

const produtos = [
  { id: 1, nome: 'Teclado', preco: 'R$ 150,00' },
  { id: 2, nome: 'Mouse', preco: 'R$ 80,00' },
  { id: 3, nome: 'Monitor', preco: 'R$ 900,00' },
]

function ListaProdutos() {
  return (
    <ul className="lista">
      {produtos.map((produto) => (
        <li key={produto.id} className="item">
          <strong>{produto.nome}</strong> — {produto.preco}
        </li>
      ))}
    </ul>
  )
}

export default ListaProdutos