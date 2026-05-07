import './ListaFilmes.css'

const filmes = [
  { id: 1, nome: 'Interestelar', categoria: 'Ficção Científica', nota: 9.5 },
  { id: 2, nome: 'Coringa', categoria: 'Drama', nota: 8.7 },
  { id: 3, nome: 'Parasita', categoria: 'Suspense', nota: 9.0 },
]

function ListaFilmes() {
  return (
    <div className="filmes-container">
      {filmes.map((filme) => (
        <div key={filme.id} className="filme-card">
          <h3>{filme.nome}</h3>
          <p>Categoria: {filme.categoria}</p>
          <p>Nota: {filme.nota}</p>
          <button className="btn-assistir">Assistir</button>
        </div>
      ))}
    </div>
  )
}

export default ListaFilmes