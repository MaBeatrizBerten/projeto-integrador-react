import './ListaAlunos.css'

const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 5 },
  { nome: 'Carla', nota: 9 },
  { nome: 'Diego', nota: 4 },
]

function ListaAlunos() {
  return (
    <ul className="lista-alunos">
      {alunos.map((aluno, index) => (
        <li key={index} className={aluno.nota >= 7 ? 'aprovado' : 'reprovado'}>
          {aluno.nome} — Nota: {aluno.nota}
        </li>
      ))}
    </ul>
  )
}

export default ListaAlunos