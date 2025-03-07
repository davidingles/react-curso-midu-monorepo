import { Cuadrado } from './Cuadrado';
import { useState } from 'react';
import './Tres.css';
import { TURNO } from './constants.js';
import { checkWinner } from '../logic/checkWinner.js';
import { saveStorage, resetStorage } from '../logic/storage.js';



export default function Tres() {
  const [tablero, setTablero] = useState(() => {
    const tablero = JSON.parse(window.localStorage.getItem('tablero'));
    return tablero ? tablero : Array(9).fill(null);
  });
  const [turno, setTurno] = useState(() => {
    const turno = JSON.parse(window.localStorage.getItem('turno'));
    return turno ? turno : TURNO.X;
  });
  const [ winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState([]);



  const updateTablero = (indice) => {
    if (tablero[indice] !== null) return;
    if (winner) return;
    const nuevoTurno = turno === TURNO.X ? TURNO.O : TURNO.X;
    setTurno(nuevoTurno);
    saveStorage(tablero, nuevoTurno);
    const nuevoTablero = [...tablero];
    nuevoTablero[indice] = nuevoTurno;
    setTablero(nuevoTablero);
    checkWinner(nuevoTablero, setWinner, setWinningCombo);
  

  }

  return (
    
    <main>
      <h1>TRES EN RAYA</h1>
      <section className="tablero">
        {
          tablero.map((casilla, index) => (
            <Cuadrado
              key={index} 
              index={index}
              updateTablero={updateTablero}
              isActive={winningCombo.includes(index)}
            >
              {casilla}
            </Cuadrado>
          ))
        }
        
      </section>
      <section className='turno'>
        <Cuadrado isActive={turno === TURNO.X && winner === null}>
          {TURNO.O}
        </Cuadrado>
        <Cuadrado isActive={turno === TURNO.O && winner === null}>
        {TURNO.X}
        </Cuadrado>
      </section>
      <footer>
        <button onClick={() =>
          {setTablero(Array(9).fill(null))
          setTurno(TURNO.X)
        setWinner(null)
        setWinningCombo([])
        resetStorage()
        }
        }>
          Reiniciar
        </button>
      </footer>
    </main>
  )
}