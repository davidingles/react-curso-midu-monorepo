import confetti from "canvas-confetti";
import { COMBINACIONES } from "../components/constants";

export const checkWinner = (tablero, setWinner, setWinningCombo) => {
    for (const combo of COMBINACIONES) {
      const [a, b, c] = combo;
      if (
        tablero[a] &&
        tablero[a] === tablero[b] &&
        tablero[a] === tablero[c]
      ) {
        setWinner(tablero[a]);
        setWinningCombo(combo);
        confetti(); 
        return tablero[a];
      }
    }
    return null;
  }