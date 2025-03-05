import { useState } from 'react'
import './TresEnRaya.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

function Square({ index, turn, isActive, children, updateBoard }) {
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <button onClick={handleClick} className={`cell ${isActive ? 'activo' : ''}`}>
      {children}
    </button>
  )
}

function TresEnRaya() {
  const [turn, setTurn] = useState(TURNS.X)
  const [board, setBoard] = useState(Array(9).fill(null))


  const updateBoard = (indice) => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newBoard = [...board]
    newBoard[indice] = turn  
    setBoard(newBoard)
  }

  return (
    <main>
      <h1>Tres En Raya</h1>
      <section className='board'>
        {
          board.map((cell, index) => (
            <Square
              key={index}
              index={index}
              turn={turn}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          ))
        }
      </section>
      <section className='turno'>
        <Square isActive={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isActive={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default TresEnRaya