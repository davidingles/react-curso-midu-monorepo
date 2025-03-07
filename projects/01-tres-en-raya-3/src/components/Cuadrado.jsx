export function Cuadrado({index, children, updateTablero, isActive}) {

  const handleCLick = () => {
    updateTablero(index);
  }
  return (
    <div
      onClick={handleCLick}
      className={`casilla ${isActive ? 'turnoactivo' : ''}`}>
      {children}
    </div>
  )
}