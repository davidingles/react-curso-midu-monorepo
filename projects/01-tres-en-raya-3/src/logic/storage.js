export const saveStorage = (tablero, turno) => {
  window.localStorage.setItem('tablero', JSON.stringify(tablero));
  window.localStorage.setItem('turno', JSON.stringify(turno));
}

// export const loadStorage = () => {
//   const tablero = JSON.parse(window.localStorage.getItem('tablero'));
//   const turno = JSON.parse(window.localStorage.getItem('turno'));
//   return { tablero, turno };
// }

export const resetStorage = () => {

  window.localStorage.removeItem('tablero');
  window.localStorage.removeItem('turno');
}