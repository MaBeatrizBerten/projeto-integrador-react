import { useState } from 'react'

// Exercícios anteriores
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

// Exercícios CSS
import CardAluno from './exercicioCss/ex1/CardAluno'
import ListaProdutos from './exercicioCss/ex2/ListaProdutos'
import MenuHorizontal from './exercicioCss/ex3/MenuHorizontal'
import ListaAlunos from './exercicioCss/ex4/ListaAlunos'
import ListaFilmes from './exercicioCss/ex5/ListaFilmes'
import TituloInline from './exercicioCss/ex6/TituloInline'
import ListaUsuarios from './exercicioCss/ex7/ListaUsuarios'
import GridProdutos from './exercicioCss/ex8/GridProdutos'
import BotoesDinamicos from './exercicioCss/ex9/BotoesDinamicos'
import Vitrine from './exercicioCss/ex10/Vitrine'

const exerciciosAnteriores = [
  Exercicio1, Exercicio2, Exercicio3, Exercicio4, Exercicio5,
  Exercicio6, Exercicio7, Exercicio8, Exercicio9, Exercicio10,
]

const exerciciosCss = [
  CardAluno, ListaProdutos, MenuHorizontal, ListaAlunos, ListaFilmes,
  TituloInline, ListaUsuarios, GridProdutos, BotoesDinamicos, Vitrine,
]

function App() {
  const [aba, setAba] = useState('css')
  const [exercicioAtual, setExercicioAtual] = useState(1)

  const lista = aba === 'css' ? exerciciosCss : exerciciosAnteriores
  const Componente = lista[exercicioAtual - 1]

  return (
    <div>
      <h1>Lista de Exercícios React</h1>

      <div>
        <button onClick={() => { setAba('anteriores'); setExercicioAtual(1) }}>
          Exercícios Anteriores
        </button>
        <button onClick={() => { setAba('css'); setExercicioAtual(1) }}>
          Exercícios CSS
        </button>
      </div>

      <nav>
        {lista.map((_, index) => {
          const numero = index + 1
          return (
            <button
              key={numero}
              onClick={() => setExercicioAtual(numero)}
              className={exercicioAtual === numero ? 'ativo' : ''}
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