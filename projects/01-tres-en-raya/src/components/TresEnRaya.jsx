import { useState } from 'react'
import './TresEnRaya.css'
import confetti from 'canvas-confetti'

const TURNS = {
  X: 'X',
  O: 'O'
}

const WINNER_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function TresEnRaya() {
  const [turn, setTurn] = useState(TURNS.X)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null)
  const [winningCombination, setWinningCombination] = useState([])

  const resetGame = () => {
    setTurn(TURNS.X)
    setBoard(Array(9).fill(null))
    setWinner(null)
    setWinningCombination([])
  }

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBINATIONS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        setWinningCombination(combo)
        return boardToCheck[a]
      }
    }
    return null
  }

  const updateBoard = (indice) => {
    if (board[indice] !== null || winner) return
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newBoard = [...board]
    newBoard[indice] = turn  
    setBoard(newBoard)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
  }

  return (
    <main>
      <h1>Tres En Raya</h1>
      <section className='board'>
        {
          board.map((cell, index) => (
            <button
              key={index}
              onClick={() => updateBoard(index)}
              className={`cell ${winningCombination.includes(index) ? 'activo' : ''}`}
            >
              {cell}
            </button>
          ))
        }
      </section>
      <section className='turno'>
        <button className={`cell ${turn === TURNS.X && winner === null ? 'activo' : ''}`}>
          {TURNS.X}
        </button>
        <button className={`cell ${turn === TURNS.O && winner === null ? 'activo' : ''}`}>
          {TURNS.O}
        </button>
      </section>
      {
        winner !== null && (
          <footer className='winner'>
            <button onClick={resetGame}>
              Empezar de nuevo
            </button>
          </footer>
        )
      }
      {
        winner === null && board.every(cell => cell !== null) && (
          <footer className='winner'>
            <p>Empate</p>
            <button onClick={resetGame}>
              Empezar de nuevo
            </button>
          </footer>
        )
      }
    </main>
  )
}

export default TresEnRaya