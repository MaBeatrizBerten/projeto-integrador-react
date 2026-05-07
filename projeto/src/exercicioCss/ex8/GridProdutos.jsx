import './GridProdutos.css'

const produtos = [
  { id: 1, nome: 'Notebook', preco: 'R$ 3.500,00' },
  { id: 2, nome: 'Smartphone', preco: 'R$ 2.000,00' },
  { id: 3, nome: 'Tablet', preco: 'R$ 1.200,00' },
  { id: 4, nome: 'Headphone', preco: 'R$ 400,00' },
  { id: 5, nome: 'Webcam', preco: 'R$ 250,00' },
  { id: 6, nome: 'SSD', preco: 'R$ 350,00' },
]

function GridProdutos() {
  return (
    <div className="grid-container">
      {produtos.map((produto) => (
        <div key={produto.id} className="grid-card">
          <h3>{produto.nome}</h3>
          <p>{produto.preco}</p>
        </div>
      ))}
    </div>
  )
}

export default GridProdutos