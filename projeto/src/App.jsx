import Exercicio1 from './exercicios/Exercicio1'
import Exercicio2 from './exercicios/Exercicio2'
import Exercicio3 from './exercicios/Exercicio3'
import Exercicio4 from './exercicios/Exercicio4'
import Exercicio5 from './exercicios/Exercicio5'
import Exercicio6 from './exercicios/ex6/Exercicio6'
import Exercicio7 from './exercicios/Exercicio7'
import Exercicio8 from './exercicios/Exercicio8'
import Exercicio9 from './exercicios/Exercicio9'
import Exercicio10 from './exercicios/Exercicio10'
import { useState } from 'react'

const exercicios = [
  Exercicio1,
  Exercicio2,
  Exercicio3,
  Exercicio4,
  Exercicio5,
  Exercicio6,
  Exercicio7,
  Exercicio8,
  Exercicio9,
  Exercicio10,
]

function App() {
  const [exercicioAtual, setExercicioAtual] = useState(1)

  const Componente = exercicios[exercicioAtual - 1]

  return (
    <div>
      <h1>Lista de Exercícios React</h1>

      <nav className="nav-exercicios">
        {exercicios.map((_, index) => {
          const numero = index + 1
          const ativo = exercicioAtual === numero
          return (
            <button
              key={numero}
              onClick={() => setExercicioAtual(numero)}
              className={ativo ? 'ativo' : ''}
            >
              Exercício {numero}
            </button>
          )
        })}
      </nav>

      <div className="exercicio">
        <Componente />
      </div>
    </div>
  )
}

export default App
