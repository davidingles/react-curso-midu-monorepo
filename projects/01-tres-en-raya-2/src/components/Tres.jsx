
import { useState } from "react"
import './tres.css'

const TURN = {
  X: 'X',
  O: 'O'
}

const COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function Tres() {
const [ board, setBoard ] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.X)
  const [winner, setWinner] = useState(null)
  const [ cellWin, setCellWin ] = useState([])
  const [ empate, setEmpate ] = useState(false)

  const checkWinner = (checkBoard) => {
    for (const combo of COMBINATIONS) {
      const [a, b, c] = combo
      if (checkBoard[a] && checkBoard[a] === checkBoard[b] && checkBoard[a] === checkBoard[c]) {
        setCellWin(combo)
        setWinner(checkBoard[a])
        break
      }
    }
  }

  const checkEmpate = (board) => {
    if (board.every(cell => cell)) {
      setEmpate(true)
    }
  }

  const handleClick = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    checkWinner(newBoard)

    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)

    checkEmpate(newBoard)

  }

  return (
    <>
      <main>
        <h1>TRES EN RAYA</h1>
        <section className="tablero">
          {
            board.map((cell, index) => (
              <div
                key={index}
                className={`cell ${cellWin.includes(index) ? 'active' : ''}`}
                onClick={() => {
                  handleClick(index)
                }}>
                {cell}
              </div>
            ))
          }

        </section>
        <footer className="footer">
          <div className={`cell ${winner === null && turn===TURN.X ? 'active' : ''}`}>{TURN.X}</div>
          <div className={`cell ${winner === null && turn===TURN.O ? 'active' : ''}`}>{TURN.O}</div>
        </footer>
        <button className="reset" onClick={() => {
          setBoard(Array(9).fill(null))
          setTurn(TURN.X)
          setWinner(null)
          setCellWin([])
          setEmpate(false)
        }}>
          {empate ? 'Empate' : winner ? `Ganador: ${winner}` : 'Reiniciar'}
        </button>
      </main>
    </>
  )
}

export default Tres