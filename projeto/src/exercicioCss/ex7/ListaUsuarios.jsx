import './ListaUsuarios.css'

const usuarios = [
  { id: 1, nome: 'Maria Souza', email: 'maria@email.com', telefone: '(11) 99999-0001' },
  { id: 2, nome: 'Pedro Lima', email: 'pedro@email.com', telefone: '(11) 99999-0002' },
  { id: 3, nome: 'Julia Costa', email: 'julia@email.com', telefone: '(11) 99999-0003' },
]

function ListaUsuarios() {
  return (
    <div className="usuarios-container">
      {usuarios.map((usuario) => (
        <div key={usuario.id} className="usuario-card">
          <h3>{usuario.nome}</h3>
          <p>{usuario.email}</p>
          <p>{usuario.telefone}</p>
        </div>
      ))}
    </div>
  )
}

export default ListaUsuarios